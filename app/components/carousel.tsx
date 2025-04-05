'use client'

import React from 'react';
import Slider from 'react-slick';
import styles from '../page.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <div className={styles.sliderNonClickable}>
            <img
              className={styles.sliderImages}
              src={image}
              alt={`Project ${index + 1}`}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
