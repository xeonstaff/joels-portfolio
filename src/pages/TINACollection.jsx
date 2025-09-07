// src/pages/TINACollection.jsx
import React, { useMemo } from "react";
import Masonry from "react-masonry-css";
import "./TINA.css";
import { useParams, Link } from "react-router-dom";

// load all images; we’ll filter by folder (slug)
const allImgCtx = require.context(
  "../assets/tina",
  true,
  /\.(png|jpe?g|webp|PNG|JPG|JPEG)$/
);
// load captions
const infoCtx = require.context("../assets/tina", true, /info\.json$/);

function getCaption(slug) {
  try {
    const data = infoCtx(`./${slug}/info.json`);
    return data.caption || data.title || data.description || `Series ${slug}`;
  } catch {
    return `Series ${slug}`;
  }
}

const TINACollection = () => {
  const { slug } = useParams(); // "1", "2", ...
  const title = getCaption(slug);

  const images = useMemo(() => {
    return allImgCtx
      .keys()
      .filter((k) => {
        // "./2/filename.webp"
        const [folder, ...rest] = k.replace(/^\.\//, "").split("/");
        const file = rest.join("/");
        return folder === slug && !/cover\.webp$/i.test(file);
      })
      .map((k) => allImgCtx(k));
  }, [slug]);

  const breakpointColumnsObj = useMemo(
    () => ({ default: 3, 1200: 3, 900: 2, 600: 1 }),
    []
  );

  return (
    <div className="p-4 w-full flex flex-col items-center">
      <h1 className="title text-3xl md:text-4xl font-bold text-gray-100 text-center w-full">
        {title}
      </h1>
      <p className="subtitle text-sm text-center text-gray-300">
        <Link to="/tina" className="underline hover:text-white transition">
          ← Back to all
        </Link>
      </p>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-8"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${title}-${i}`}
            loading="lazy"
            className="tina-img w-full h-auto mb-4 rounded-md border border-gray-700 shadow-sm"
          />
        ))}
      </Masonry>
    </div>
  );
};

export default TINACollection;
