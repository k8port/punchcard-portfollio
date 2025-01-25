import React from 'react';
import Image from 'next/image';

interface CustomImageProps {
  src: string; // The source of the image
  alt: string; // Alt text for the image
  containerSize?: string; // Tailwind width/height classes for the container
  imageSize?: string; // Tailwind width/height classes for the image inside the container
  circleColor?: string; // Tailwind background color for the circle
  border?: string; // Tailwind border classes for the container
  shadow?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  containerSize = 'w-50 h-50', // Default circle size
  imageSize = 'w-40 h-40', // Default image size (smaller than the container)
  circleColor = 'bg-gray-200', // Default circle color
  border = 'border-2 border-lightgreen', // Default border size and color
  shadow = 'shadow-default' // Default shadow
}) => {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full ${containerSize} ${circleColor} ${border} ${shadow}`}
    >
      {/* Image inside the container */}
      <div className={`relative ${imageSize}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-scale-down"
        />
      </div>
    </div>
  );
};

export default CustomImage;
