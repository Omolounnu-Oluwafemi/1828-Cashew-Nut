import { useState, useEffect } from 'react';
import './../../assets/styles/services.css'

import PropTypes from 'prop-types';

const ServicesCarousel = ({ images }) => {
  

ServicesCarousel.propTypes = {
    images: PropTypes.array.isRequired,
};

  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [images.length]); 

  return (
    <div className="service-carousel">
      <div className="">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`carousel-item ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="carousel-buttons">
        {images.map((image, index) => (
          <button key={index} data-index={index} onClick={() => changeSlide(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
