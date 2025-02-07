// app/ui/PunchCard.tsx
import Punchcard from "./punchcard/Punchcard";
import React from "react";

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
      className={className}
      imageSrc="/images/punchcard/punchcard_mintgreenV.png"
    >
      <h2 className="text-stroke-header pb-2 header-shadow text-sm my-1">
        {label}
      </h2>

      <div className="bg-bonewhite/75 font-commissioner text-xs text-pretty p-2 rounded-lg">
        <div className="pb-2">
          <span className="bio-label mr-2">[{content.who.label}]:</span> <br />{" "}
          <span className="bio-text">{content.who.text}</span>
        </div>
        <p className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.what.label}]:</span> <br />{" "}
          <span className="bio-text">{content.what.text}</span>
        </p>
        <p className="my-4 pb-2">
          <span className="bio-label mr-2 mb-4">[{content.why.label}]:</span>{" "}
          <br /> <span className="bio-text">{content.why.text}</span>
        </p>
        <p className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.where.label}]:</span>
          <br /> <span className="bio-text">{content.where.text}</span>
        </p>
        <p className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.when.label}]:</span> <br />{" "}
          <span className="bio-text">{content.when.text}</span>
        </p>
        <p className="my-4 pb-2">
          <span className="bio-label mr-2">[{content.how.label}]:</span> <br />{" "}
          <span className="bio-text">{content.how.text}</span>
        </p>
      </div>
    </Punchcard>
  );
}
