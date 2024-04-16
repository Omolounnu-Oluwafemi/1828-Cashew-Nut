/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './../../assets/styles/services.css'

const HomeCarousel = ({ images }) => {
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
    <div className="home-carousel">
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
          <div
            key={index}
            data-index={index}
            onClick={() => changeSlide(index)}
            className='selectButton'
          >
            {currentSlide === index ?
              <svg width="30" height="30" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" fill="#9C9D9E" cursor="pointer"/>
              </svg>
                  : 
                <svg width="30" height="30" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" fill="#D9D9D9" cursor="pointer"/>
              </svg>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
