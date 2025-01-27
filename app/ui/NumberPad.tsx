import React from "react";

const NumberPad: React.FC = () => {
  const gridItems = Array(9).fill(null);

  return (
    <>
    <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-3 gap-2 w-fit p-2">
        {gridItems.map((_, index) => (
          <div 
            key={index} 
            className="relative w-[60px] h-[60px] rounded-full bg-pearl/75 
                     flex items-center justify-center
                     hover:bg-pearl/90 transition-colors duration-200"
          >
            <div className="absolute inset-0 border border-ivory rounded-full shadow-punchcard" />
            <div className="absolute inset-0 border border-antiqueBlack rounded-full shadow-punchcard" />
            <div className="font-cormorantGaramond text-xl font-bold text-antiqueblack">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NumberPad;