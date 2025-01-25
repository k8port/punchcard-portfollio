// app/ui/Logo.tsx
import React from "react";
import CustomizableImage from "./CustomizableImage";
import OrnateBorder from "./OrnateBorder";
import { CldImage } from "next-cloudinary";
import content from "@/public/content.json";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {

  return (
    <div className={`mx-auto ${className}`}>
      {/* Latin text section */}
      <div className="ml-12 self-start w-4/5">
        <OrnateBorder bgColor={`
            bg-tropicsblue/85 
            bg-[url('/images/gears/gears3_pink.png')] 
            bg-cover bg-center bg-no-repeat 
            bg-blend-multiply
          `}
          borderColor="border-seashell">
          <div className="relative z-10">
            <h1 className="font-charm font-semibold text-3xl motto-text-shadow">{content.sections.branding.motto}</h1>
          </div>
        </OrnateBorder>
      </div>

      <div className="relative w-full flex justify-center">
        {/* Portrait section */}
        <div className="relative w-[200px] aspect-[333/437] shadow-default border-2">
          <CldImage
            src="https://res.cloudinary.com/djorzswta/image/upload/v1737840009/buh6otgqpps4v6eeaum3.png"
            alt="Portrait"
            className="object-contain"
            sizes="100vw"
            priority
          />
        {/* Signature section */}
        <div className="absolute -top-4 -right-16 z-10">
          <CustomizableImage
            src="/images/signature.png"
            alt="Signature"
            circleColor="bg-mintgreen/65"
            border="border-2 border-skyblue/95"
            shadow="inner-shadow"
          />
        </div>
        </div>

      </div>
    </div>
  );
}
