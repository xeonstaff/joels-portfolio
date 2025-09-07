#!/usr/bin/env node
/**
 * Convert JPG/JPEG/PNG → WEBP recursively.
 * - Defaults to scanning the CURRENT DIRECTORY (cwd)
 * - Removes originals after successful conversion
 * - Ensures a cover.webp exists in each folder (copies first .webp)
 *
 * Usage examples:
 *   # If you're already in src/assets/tina
 *   node jpgtowebp.js
 *
 *   # Or specify a dir explicitly
 *   node jpgtowebp.js --dir=src/assets/tina
 *
 *   # Tweak quality
 *   node jpgtowebp.js --quality=85
 */

const path = require("path");
const fs = require("fs/promises");
const fg = require("fast-glob");
const sharp = require("sharp");

// ----- CLI args -----
const argv = process.argv.slice(2);
const arg = (k, d) => {
  const m = argv.find((a) => a.startsWith(`--${k}=`));
  if (m) return m.split("=")[1];
  if (argv.includes(`--${k}`)) return true;
  if (argv.includes(`--no-${k}`)) return false;
  return d;
};

// Default to the CURRENT directory
const baseDir = path.resolve(arg("dir", process.cwd()));
const quality = Math.max(1, Math.min(100, Number(arg("quality", 82)) || 82));

(async function main() {
  console.log(`\n📂 CWD:       ${process.cwd()}`);
  console.log(`📁 Base dir:  ${baseDir}`);
  console.log(`🎯 Quality:   ${quality}`);
  console.log(`🗑️  Delete originals after convert: YES`);

  // Find images (originals + existing webp)
  const patternOriginals = toPosix(path.join(baseDir, "**/*.{jpg,jpeg,png,JPG,JPEG,PNG}"));
  const patternWebps     = toPosix(path.join(baseDir, "**/*.webp"));
  console.log(`🔎 Globs:\n   - ${patternOriginals}\n   - ${patternWebps}`);

  const originals = await fg(patternOriginals, { onlyFiles: true });
  const allWebps  = await fg(patternWebps, { onlyFiles: true });

  if (!originals.length && !allWebps.length) {
    console.log("No images found. (No JPG/PNG/WEBP under base dir) Exiting.");
    return;
  }

  // Convert originals
  let converted = 0, deleted = 0;
  for (const file of originals) {
    const out = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    try {
      await sharp(file)
        .rotate()
        .withMetadata()
        .toFormat("webp", { quality })
        .toFile(out);
      await fs.unlink(file); // delete original
      console.log(`✅ Converted & deleted: ${rel(file)} → ${rel(out)}`);
      converted++; deleted++;
    } catch (err) {
      console.error(`❌ Failed: ${rel(file)} → ${err.message}`);
    }
  }

  // Create cover.webp in each folder if missing
  // Re-scan webps in case we just created them
  const webps = await fg(patternWebps, { onlyFiles: true });
  const byDir = new Map();
  for (const f of webps) {
    const dir = path.dirname(f);
    if (!byDir.has(dir)) byDir.set(dir, []);
    byDir.get(dir).push(f);
  }

  let coverCreated = 0;
  for (const [dir, list] of byDir) {
    const hasCover = list.some((f) => path.basename(f).toLowerCase() === "cover.webp");
    if (hasCover) continue;

    // Use first .webp in the folder as the cover
    const source = list[0];
    if (!source) continue;

    const coverPath = path.join(dir, "cover.webp");
    try {
      await fs.copyFile(source, coverPath);
      console.log(`🪄 Created cover.webp in ${rel(dir)} (from ${path.basename(source)})`);
      coverCreated++;
    } catch (e) {
      console.error(`⚠️ Could not create cover.webp in ${rel(dir)}: ${e.message}`);
    }
  }

  console.log(`\nDone.`);
  console.log(`Converted:         ${converted}`);
  console.log(`Deleted originals: ${deleted}`);
  console.log(`Covers created:    ${coverCreated}\n`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

function rel(p) {
  return path.relative(process.cwd(), p) || ".";
}
function toPosix(p) {
  return p.replace(/\\/g, "/");
}
