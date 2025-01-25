import React from 'react';
import Image from "next/legacy/image";


interface CardCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardCard({ children, className }: CardCardProps) {

return (
    <div className={`
      ${className}
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
                layout="fill"
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       40vw"
                className="no-x-scroll object-cover object-left-top opacity-40 group-hover:opacity-20 transition-opacity duration-300 ease-in-out pointer-events-none"
            />  
        </div>
    </div>
  );
} 