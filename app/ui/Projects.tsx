import React from "react";
import Punchcard from "./Punchcard";
import NumberPad from "./NumberPad";
import FullWidthBanner from "./FullWidthBanner";
import { lobster } from "../fonts";

interface ProjectProps {
  className?: string;
}

export default function Projects({ className }: ProjectProps) {
  const title = "Projects";
  const icons = [
    { name: "Hammer", className: "text-lightgreen" },
    { name: "Screwdriver Wrench", className: "text-lightsalmon" },
    { name: "Compass Drafting", className: "text-skyblue" },
    { name: "Person Digging", className: "text-misspiggy" },
  ];
  return (
    <Punchcard className={`${className} w-full`}>
      <FullWidthBanner
        paragraphText="This section is..."
        headingText="Under Construction"
        className="bg-thunder z-50"
        icons={icons}
      />
      {/* Outer Container */}
      <div className="z-10">
        <h2
          className={`${lobster.className} font-lobster text-stroke-header sm:text-3xl header-shadow my-4`}
        >
          {" "}
          {title}{" "}
        </h2>
        <div className="w-full">
          {/* Project Circles */}
          <NumberPad />
        </div>
      </div>
    </Punchcard>
  );
}
