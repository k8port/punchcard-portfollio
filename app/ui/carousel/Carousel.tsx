'use client';

import React, { ReactNode } from 'react';
import CarouselUI from './CarouselUI';
import { useCarousel } from '../../state/hooks';
import Slide from './Slide';

interface CarouselProps {
    children: ReactNode[];
    className?: string;
}

interface CarouselComponent extends React.FC<CarouselProps> {
    Slide: typeof Slide;
}

const Carousel: CarouselComponent = ({ children, className = '' }) => {
    const totalSlides = React.Children.count(children);
    const { currentIndex, handlePrev, handleNext } = useCarousel(totalSlides);

    return (
        <CarouselUI
            className={className}
            currentIndex={currentIndex}
            onPrev={handlePrev}
            onNext={handleNext}
        >
            {children}
        </CarouselUI>
    )
}

Carousel.Slide = Slide;
export default Carousel;