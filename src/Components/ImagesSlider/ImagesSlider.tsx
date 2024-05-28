import React, { useRef, useState, useEffect } from 'react';
import css from './ImagesSlider.module.css';
interface ImageSliderProps {
  images: string[];
  interval?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const sliderRef = useRef<HTMLDivElement>(null);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const slideInterval = setInterval(() => {
     
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [interval]);

  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(1);
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
            }
        
          }, 50);
        }
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = 'none';
          setCurrentIndex(extendedImages.length - 2);
          setTimeout(() => {
            if (sliderRef.current) {
              sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
            }
           
          }, 50);
        }
      }, 500);
    }
  }, [currentIndex, extendedImages.length]);

  return (
    <div className={css.sliderContainer}>
      <div
        ref={sliderRef}
        className={css.slider}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedImages.map((image, index) => (
          <div className={css.slide} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;