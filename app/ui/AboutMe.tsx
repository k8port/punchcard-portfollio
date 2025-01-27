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
      }
      what: {
        text: string;
        label: string;
      }
      why: {
        text: string;
        label: string;
      }
      where: {
        text: string;
        label: string;
      }
      when: {
        text: string;
        label: string;
      }
  }
};


export default function AboutMe({
  label,
  content,
  className,
}: AboutMeProps) {

  return (
    <Punchcard className={className}>
      <h1
        className="text-stroke-header pb-2 header-shadow my-1"
        >
          {label}
        </h1>

        <div className="font-cormorantGaramond text-sm text-pretty">
          <p className="pb-2"><span className="bio-label mr-2">[{content.who.label}]:</span> <br /> {content.who.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.what.label}]:</span> <br /> {content.what.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.why.label}]:</span> <br /> {content.why.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.where.label}]:</span> {content.where.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.when.label}]:</span> {content.when.text}</p>
        </div>
      </Punchcard>
  );
}
