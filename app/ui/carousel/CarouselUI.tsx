'use client';

import React, { ReactNode } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

interface CarouselUIProps {
  className?: string;
  children?: ReactNode[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const CarouselUI: React.FC<CarouselUIProps> = ({ className = '', children, currentIndex, onPrev, onNext }) => {
  const totalSlides = React.Children.count(children);

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Single visible slide with fixed height */}
      <div className="w-full h-full min-h-[575px] relative">
        <div className="absolute inset-0 pb-12">
          {React.Children.toArray(children)[currentIndex]}
        </div>

        {/* Navigation Buttons - moved to bottom center */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-4 absolute bottom-2 left-0 right-0">
            <button 
              onClick={onPrev} 
              aria-label="Previous slide" 
              className="p-1.5 
                bg-pink text-bonewhite border border-misspiggy_600 inner-shadow-sm rounded-full hover:bg-seashell hover:border hover:border-skyblue
                hover:text-pink active:bg-skyblue active:border-none active:text-misspiggy active:ring-2 active:ring-lightgreen transition"
            >
              <FaArrowLeft size={12} />
            </button>
            <button 
              onClick={onNext} 
              aria-label="Next slide" 
              className="p-1.5
                bg-pink text-bonewhite border border-misspiggy_600 inner-shadow-sm rounded-full hover:bg-seashell hover:border hover:border-skyblue 
                hover:text-pink active:bg-skyblue active:border-none active:text-misspiggy active:ring-2 active:ring-lightgreen transition"
            >
              <FaArrowRight size={12} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselUI;