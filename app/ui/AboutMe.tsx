// app/ui/PunchCard.tsx
'use client';

import CardCard from "./punchcard/CardCard";
import React from "react";
import content from "@/public/content.json";

interface AboutMeProps {
  className?: string;
}

export default function AboutMe({
  className,
}: AboutMeProps) {

  return (
    <CardCard className={className}>
      <h1
        className="font-lobster text-lg text-left text-palemint text-stroke-header
          pb-2 sm:text-xl header-shadow my-1"
        >
          {content.sections.aboutMe.label}
        </h1>

        <div className="font-cormorantGaramond text-sm text-pretty">
          <p className="pb-2"><span className="bio-label mr-2">[{content.sections.aboutMe.content.who.label}]:</span> <br /> {content.sections.aboutMe.content.who.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.sections.aboutMe.content.what.label}]:</span> <br /> {content.sections.aboutMe.content.what.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.sections.aboutMe.content.why.label}]:</span> <br /> {content.sections.aboutMe.content.why.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.sections.aboutMe.content.where.label}]:</span> {content.sections.aboutMe.content.where.text}</p>
          <p className="pb-2"><span className="bio-label mr-2">[{content.sections.aboutMe.content.when.label}]:</span> {content.sections.aboutMe.content.when.text}</p>
        </div>
      </CardCard>
  );
}
