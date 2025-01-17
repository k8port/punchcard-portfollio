// app/ui/Logo.tsx
import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`
      flex flex-col items-center 
      gap-6 sm:gap-8 wide-view:gap-11 
      w-[280px] md:w-[300px] wide-view:w-[333px] 
      mx-auto md:mx-0 ${className}`}
    >
      {/* Latin text section */}
      <div className="relative w-full max-w-[291px] h-auto aspect-[291/41]">
        <div className="absolute inset-0 bg-vanilla rounded-lg shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center font-crimsonText text-sm md:text-base wide-view:text-lg">
            Ne dolorem tuum perdas.
          </div>
        </div>
      </div>

      {/* Signature section */}
      <div className="relative w-full max-w-[283px] h-auto aspect-[283/235]">
        <div className="ellipse bg-mintGreen/65 border-4 border-skyBlue shadow-default
          w-[25vw] h-[18vw] max-w-[300px] max-h-[235px]">
          <Image src="/images/signature.png" alt="Signature" fill objectFit="contain" className="rounded-full" />
        </div>
      </div>
      
      {/* Portrait section */}
      <div className="relative w-full max-w-[333px] h-auto aspect-[333/437]">
          <Image 
            src="/images/portrait.png" 
            alt="Portrait"
            className="object-cover"
            fill
            sizes="(max-width: 768px) 280px, (max-width: 1200px) 300px, 333px"
            priority
        />
      </div>
    </div>
  );
}
