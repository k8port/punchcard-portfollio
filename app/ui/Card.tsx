import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`
        ${className}
        sm:w-full
        sm:max-w-full
        md:w-full
        md:max-w-full
        lg:w-full
        lg:max-w-full
        no-x-scroll
    `}>
      {children}
    </div>
  );
}