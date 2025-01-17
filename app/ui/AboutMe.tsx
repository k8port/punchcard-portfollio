// app/ui/PunchCard.tsx
import CardCard from "./CardCard";
import React from "react";

interface AboutMeProps {
  bio: {
    title: string;
    content: Array<{
      p: {
        text: Array<{
          sentence: string;
          order: number;
        }>;
        className: string;
      };
    }>;
  };
}

export default function AboutMe({
  bio,
  floatSide,
  className,
}: AboutMeProps & { floatSide: "left" | "right"; className?: string }) {
  const { title, content } = bio;

  return (
    <>
      <CardCard floatSide={floatSide} className={className}>
        <h1
          className="font-lobster text-2xl text-left text-paleMint my-2 
          pb-4 sm:text-3xl text-stroke-midnight"
        >
          {title}
        </h1>

        <div className="font-cormorantGaramond">
          {content.map((entry, index) => {
            // Join all sentences in the 'text' array into one paragraph.
            const paragraphText = entry.p.text
            .sort((a, b) => a.order - b.order) // optional if you want to ensure ordered sentences
            .map((t) => t.sentence)
            .join(" ");

          return (
            <React.Fragment key={index}>
              <p className={entry.p.className}>{paragraphText}</p>
              {/* If you only want the line between paragraphs, omit it after the last one */}
              {index < bio.content.length - 1 && (
                <hr className="border-t-pink border-dotted my-4" />
              )}
            </React.Fragment>
            );
          })}
        </div>
      </CardCard>
    </>
  );
}
