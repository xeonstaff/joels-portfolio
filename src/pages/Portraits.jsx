// src/pages/Portraits.jsx
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './portraits.css';

const importAll = (r) => r.keys().map(r);

const Portraits = () => {
  const [images, setImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    const imgs = importAll(
      require.context('../assets/portraits', false, /\.(png|jpe?g|webp|PNG|JPG|JPEG)$/)
    ).map((src) => ({ src }));
    setImages(imgs);
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    600: 1,
  };

  return (
    <div className="p-4 w-full flex flex-col items-center">
      <h1
        className="title text-4xl font-bold text-gray-800 text-center w-full"
        style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}
      >
        50mm portraits.
      </h1>
      <p className="subtitle text-lg text-center text-gray-600 font-thin">
        &nbsp;<a href="https://joelmounts.com/#contact" className="underline hover:text-black transition font-thin">Want some for your event?</a>
      </p>


      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mt-16"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`portraits-${i}`}
            className="cursor-pointer w-full mb-4 rounded-md border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
            onClick={() => setLightboxIndex(i)}
          />
        ))}
      </Masonry>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={images}
      />
    </div>
  );
};

export default Portraits;
