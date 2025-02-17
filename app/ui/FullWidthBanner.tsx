import React from "react";
import IconRow from "./IconRow";
import { lobster } from "../fonts";

interface FullWidthBannerProps {
  paragraphText: string;
  headingText: string;
  className?: string;
  icons?: { name: string; className?: string }[];
}

const FullWidthBanner: React.FC<FullWidthBannerProps> = ({
  paragraphText,
  headingText,
  className,
  icons,
}) => {
  return (
    <div
      className={`relative w-full h-[100px] ${className}`}
      data-testid="banner-container"
    >
      <div className="absolute inset-0">
        <div
          className={`${lobster.className} flex items-center justify-center text-pearl text-xl`}
        >
          <p className={`${lobster.className} font-lobster text-2xl`}>
            <span className="text-sm text-center mb-1 font-sans">
              {paragraphText}
            </span>
            {headingText}
          </p>
        </div>
        <div className="ml-2"> {icons && <IconRow icons={icons} />} </div>
      </div>
    </div>
  );
};

export default FullWidthBanner;
