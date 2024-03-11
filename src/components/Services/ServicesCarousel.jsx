/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import './../../assets/styles/services.css'

const ServicesCarousel = ({ images }) => {
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
          <div key={index} data-index={index} onClick={() => changeSlide(index)} className='selectButton'>
              ⚪️
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
