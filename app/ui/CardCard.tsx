import React from 'react';
import Image from 'next/image';


interface CardCardProps {
  floatSide?: 'left' | 'right';
  sideMargin?: 'ml-4' | 'mr-4';
  children: React.ReactNode;
  className?: string;
}

export default function CardCard({ floatSide = 'left', children, className }: CardCardProps) {
  const floatClass = floatSide === 'right' ? 'md:float-right' : 'md:float-left'

const marginClass = floatSide === 'right' ? 'mr-4' : 'ml-4';
 

// Vary the fraction width depending on floatSide
const fractionClass =
  floatSide === 'right'
    ? 'md:w-5/12'
    : 'md:w-4/12';

return (
    <div className={`
      my-5
      ${className}
      ${fractionClass}
      ${floatClass}
      px-2 py-2
      md: ${marginClass}
      sm:w-full
      sm:max-w-full
      md:w-full
      md:max-w-full
      lg:w-full
      lg:max-w-full
      mx-4
      no-x-scroll
    bg-ivory/75 rounded-lg relative border-punchcard border-2
      group transition-colors duration-300 shadow-punchcard
    `}>
        <div className="bg-offwhite/75 relative p-5 group">
            <div className="relative z-10">{children}</div>

            <Image
                src="/images/punchcard_pink.png"
                alt="Jacquard Loom punch card"
                fill
                priority
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       40vw"
                className="no-x-scroll object-cover object-left-top opacity-40 group-hover:opacity-20 transition-opacity duration-300 ease-in-out pointer-events-none"
            />  
        </div>
    </div>
  );
} 