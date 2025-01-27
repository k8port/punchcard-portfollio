import React from "react";
import IconRow from "./IconRow";

interface FullWidthBannerProps {
  paragraphText: string;
  headingText: string;
  className?: string;
  icons?: { name: string; className?: string }[];
}

const FullWidthBanner: React.FC<FullWidthBannerProps> = ({ paragraphText, headingText, className, icons }) => {

  return (
    <div className={`relative w-full h-[100px] ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center text-pink font-lobster text-xl">
        <p className="font-lobster text-2xl"><span className="text-sm text-center mb-1 font-ibmPlexSans">{paragraphText}</span>{headingText}</p>
        <div className="ml-2"> {icons && <IconRow icons={icons} />} </div>
      </div>
    </div>
  );
};

export default FullWidthBanner;