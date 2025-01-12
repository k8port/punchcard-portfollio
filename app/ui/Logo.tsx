import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex flex-col items-center gap-11 w-[333px] ${className}`}>
      <div className="bg-vanilla w-[291px] h-[41px] rounded-lg shadow-inner">
        {/* Latin text vector */}
      </div>
      
      <div className="relative w-[283px] h-[235px]">
        <div className="absolute inset-0 bg-skyBlue rounded-lg shadow-punchcard">
          {/* Signature vector */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-midnight font-lobster text-4xl">
            K8 Portalatin
          </div>
        </div>
      </div>
      
      <div className="w-[333px] h-[437px] border-2 border-ivory shadow-inner rounded-lg overflow-hidden">
        <Image 
          src="/images/portrait.png" 
          alt="Portrait placeholder"
          className="w-full h-full object-cover"
          width={333}
          height={437}
        />
      </div>
    </div>
  );
}
