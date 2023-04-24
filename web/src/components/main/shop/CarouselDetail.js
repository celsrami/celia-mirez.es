import React, { useState, useEffect } from "react";

function CarouselDetail({ interval, images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
    }, interval);
    return () => clearInterval(intervalId);
  }, [images, interval]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  return (
    <article className='container'>
      <div className='carousel'>
        <button
          className='carousel__button carousel__right'
          onClick={prevSlide}
        >
          <i class='fa-solid fa-arrow-right'></i>
        </button>
        <button className='carousel__button carousel__left' onClick={nextSlide}>
          <i className='fa-solid fa-arrow-left'></i>
        </button>
      </div>
      <div className='carousel__containerImg'>
        <img
          className='carousel__img'
          src={images[currentIndex]}
          alt={`${currentIndex + 1}`}
        />
      </div>
    </article>
  );
}

export default CarouselDetail;
