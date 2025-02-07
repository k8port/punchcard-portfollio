import React from "react";
import Punchcard from "./punchcard/Punchcard";
import NumberPad from "./NumberPad";
import FullWidthBanner from "./FullWidthBanner";

export default function Projects() {
  const title = "Projects";
  const icons = [
    { name: "Hammer", className: "text-lightgreen" },
    { name: "Screwdriver Wrench", className: "text-lightsalmon" },
    { name: "Compass Drafting", className: "text-skyblue" },
    { name: "Person Digging", className: "text-misspiggy" },
  ];
  return (
    <Punchcard className="relative w-full mx-auto h-auto p-4">
      <FullWidthBanner
        paragraphText="This section is..."
        headingText="Under Construction"
        className="bg-thunder z-50"
        icons={icons}
      />
      {/* Outer Container */}
      <div className="z-10">
        <h2 className="text-stroke-header sm:text-3x header-shadow my-4">
          {" "}
          {title}{" "}
        </h2>
        {/* Project Circles */}
        <NumberPad />
      </div>
    </Punchcard>
  );
}
