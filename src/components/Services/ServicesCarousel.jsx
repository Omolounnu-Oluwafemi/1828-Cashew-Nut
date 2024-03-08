import { useState, useEffect } from 'react';

const ServicesCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [images.length]); // Run effect only when images change

  return (
    <div className="carousel-container">
      <div className="carousel-images">
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
