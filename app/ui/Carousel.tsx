import React, { useState } from 'react';
import { FaServer, FaReact, FaTypescript, FaJava, FaPython, FaNodeJs, FaAws, FaDocker, FaCipd, FaMeteor } from 'react-icons/fa';

interface CarouselProps {
    icons: JSX.Element[];
}

export default function Carousel({ icons }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + icons.length) % icons.length);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex overflow-hidden">
                {icons.map((icon, index) => (
                    <div key={index} className={`w-1/2 transition-transform duration-300 ${index === currentIndex ? 'translate-x-0' : index < currentIndex ? 'translate-x-full' : '-translate-x-full'}`}>
                        {icon}
                    </div>
                ))}
            </div>
        </div>
    );
};
