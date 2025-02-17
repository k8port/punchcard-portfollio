// app/ui/PunchCard.tsx
import Punchcard from "./Punchcard";
import React from "react";
import { lobster, martianMono } from "../fonts";
interface AboutMeProps {
  label: string;
  className?: string;
  content: {
    who: {
      text: string;
      label: string;
    };
    what: {
      text: string;
      label: string;
    };
    why: {
      text: string;
      label: string;
    };
    where: {
      text: string;
      label: string;
    };
    when: {
      text: string;
      label: string;
    };
  };
}

export default function AboutMe({ label, content, className }: AboutMeProps) {
  return (
    <Punchcard
      data-testid="about-me"
      className={`${className} h-full`}
      imageSrc="/images/punchcard/punchcard_mintgreenV.png"
    >
      <h2
        className={`${lobster.className} font-lobster text-stroke-header pb-2 header-shadow text-sm my-1`}
      >
        {label}
      </h2>

      <div className="bg-bonewhite/75 text-xs text-pretty md:text-base p-2 rounded-lg">
        <div className="pb-2">
          <span
            className={`${martianMono.className} font-martianMono bio-label mr-2`}
          >
            [{content.who.label}]:
          </span>
          <span className="break-words">{content.who.text}</span>
        </div>
        <div className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.what.label}]:</span> <br />{" "}
          <span className="break-words">{content.what.text}</span>
        </div>
        <div className="my-4 pb-2">
          <span className="bio-label mr-2 mb-4">[{content.why.label}]:</span>{" "}
          <span className="break-words">{content.why.text}</span>
        </div>
        <div className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.where.label}]:</span>
          <span className="break-words">{content.where.text}</span>
        </div>
        <div className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.when.label}]:</span> <br />{" "}
          <span className="break-words">{content.when.text}</span>
        </div>
        {/* <p className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.how.label}]:</span> <br />{" "}
          <span className="bio-text">{content.how.text}</span>
        </p> */}
      </div>
    </Punchcard>
  );
}
