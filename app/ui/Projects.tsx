import React from 'react';
import CardCard from './punchcard/CardCard';

export default function Projects() {
  // const projectKeys = [1, 2, 3, 4, 5, 6];

  return (
    <CardCard className="relative w-full mx-auto h-auto p-4">
      {/* Outer Container */}
        <h2 className="font-lobster text-2xl sm:text-3xl header-shadow text-center my-4">
          Projects
        </h2>

        {/* Project Circles */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {/* {projectKeys.map((key) => (
            <div
              key={key}
              className="relative w-[70px] h-[70px] sm:w-[89px] sm:h-[87px]" */}
            {/* > */}
              {/* Inner Background Layer */}
              {/* <div className="absolute inset-0 bg-skyBlue border border-ivory rounded-full shadow-punchcard" />
              {/* Outer Border Layer */}
              {/* <div className="absolute inset-0 border border-antiqueblack rounded-full shadow-punchcard" />
              {/* Key Display */}
              {/* <span className="absolute inset-0 flex items-center justify-center font-cormorantGaramond text-xl sm:text-5xl font-bold text-midnight stroke-midnight">
                {key}
              </span>
            </div>
          ))} */} 
        </div>
    </CardCard>
  );
}
