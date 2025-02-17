import React from "react";

interface OrnateBorderProps {
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
}

export default function OrnateBorder({
  children,
  bgColor,
  borderColor = "border-antiqueblack",
}: OrnateBorderProps) {
  return (
    <div
      className={`
        relative ${bgColor} 
        text-center max-w-lg
        mx-auto p-5 mt-4
        border-2 ${borderColor} 
        border-double rounded-lg
        shadow-definition`}
    >
      {/* Corner Ornaments */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-t-azuremist border-l-azuremist border-double"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-t-azuremist border-r-azuremist border-double"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-b-azuremist border-l-azuremist border-double"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-b-azuremist border-r-azuremist border-double"></div>

      {/* Content */}
      <div>{children}</div>
    </div>
  );
}
