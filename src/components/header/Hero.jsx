import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Josh from '../../assets/Josh.jpeg';
import Stephan from '../../assets/Stephan.jpeg';
import './header.css';

const images = [
  Josh,
  Stephan
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="hero-container">
      <img
        src={images[current]}
        alt="Slide"
        className="hero-image"
      />

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="arrow left"
      >
        <ArrowLeft color="white" />
      </button>
      <button
        onClick={nextSlide}
        className="arrow right"
      >
        <ArrowRight color="white" />
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${current === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}