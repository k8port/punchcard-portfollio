'use client';

import { useState } from 'react';

export function useCarousel(totalSlides: number, initialIndex: number = 0) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    };
  
    return {
      currentIndex,
      handlePrev,
      handleNext,
    };
  }
  