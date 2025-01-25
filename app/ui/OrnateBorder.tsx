import React from 'react';

interface OrnateBorderProps {
    children: React.ReactNode;
    bgColor?: string;
    borderColor?: string;
}

export default function OrnateBorder({ children, bgColor, borderColor="border-antiqueblack" }: OrnateBorderProps) {

    return (
    <div className={`relative ${bgColor} text-center max-w-lg mx-auto p-2 border-2 ${borderColor} rounded-lg motto-shadow`}>
      {/* Corner Ornaments */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-t-lightgreen border-l-lightgreen"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-t-lightgreen border-r-lightgreen"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-b-lightgreen border-l-lightgreen"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-b-lightgreen border-r-lightgreen"></div>

        {/* Content */}
      <div>
        {children}
      </div>
      </div>
    );
  }