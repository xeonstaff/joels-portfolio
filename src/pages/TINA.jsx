// src/pages/TINA.jsx
import React, { useEffect, useMemo, useState } from "react";
import Masonry from "react-masonry-css";
import "./TINA.css";
import TopNoticeBar from "../components/TopNoticeBar/TopNoticeBar.jsx"

const coversCtx = require.context("../assets/tina", true, /cover\.webp$/);
const infoCtx   = require.context("../assets/tina", true, /info\.json$/);

function buildFolders() {
  const covers = coversCtx.keys().map((k) => {
    const slug = k.replace(/^\.\//, "").split("/")[0];
    return { slug, coverSrc: coversCtx(k) };
  });

  const bySlug = new Map();
  covers.forEach(({ slug, coverSrc }) => bySlug.set(slug, { slug, coverSrc }));

  infoCtx.keys().forEach((k) => {
    const slug = k.replace(/^\.\//, "").split("/")[0];
    const data = infoCtx(k);
    const caption =
      (data && (data.caption || data.title || data.description)) || slug;
    bySlug.set(slug, { ...(bySlug.get(slug) || {}), slug, caption });
  });

  return Array.from(bySlug.values()).map((f) => ({ ...f, caption: f.caption || f.slug }));
}

const TINA = () => {
  const [folders, setFolders] = useState([]);
  useEffect(() => setFolders(buildFolders()), []);
  const breakpointColumnsObj = useMemo(() => ({ default: 3, 900: 2, 600: 1 }), []);

  return (
    <div className="tina-page">
      <TopNoticeBar variant="home" delay={1000} />

      <h1 className="title">this is not artprize.</h1>
      <p className="subtitle">
        It’s connection.&nbsp;
        <a href="/#contact" className="subtitle-link">Want some for your business?</a>
      </p>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-16"
        columnClassName="my-masonry-grid_column"
      >
        {folders
          .sort((a, b) => Number(a.slug) - Number(b.slug))
          .map(({ slug, coverSrc, caption }) => (
            <a key={slug} href={`/tina/${slug}`} className="gallery-item" aria-label={`Open series ${caption}`}>
              {coverSrc ? <img src={coverSrc} alt={caption} loading="lazy" /> : <div className="fallback-box" />}
              <div className="gallery-caption">{caption}</div>
            </a>
          ))}
      </Masonry>
    </div>
  );
};

export default TINA;
