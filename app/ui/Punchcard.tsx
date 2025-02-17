import React from "react";
import Image from "next/legacy/image";

interface PunchcardProps {
  children: React.ReactNode;
  className?: string;
  imageSrc?: string;
}

export default function Punchcard({
  children,
  className,
  imageSrc,
}: PunchcardProps) {
  return (
    <div
      className={`
      ${className}
      w-full h-full
      rounded-lg
      border-punchcard border-2
    bg-oldlace/50 
      shadow-md
      transition-colors duration-300
      group relative
    `}
      data-testid="punchcard"
    >
      <div className="bg-antiqueblack/75 relative p-5 group w-full h-full">
        <div className="relative z-10 w-full h-full">{children}</div>

        <Image
          src={imageSrc || "/images/punchcard/punchcard_pink.png"}
          alt="Jacquard Loom punch card"
          layout="fill"
          sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       40vw"
          className="no-x-scroll object-cover object-left-top opacity-40 group-hover:opacity-20 transition-opacity duration-300 ease-in-out pointer-events-none"
        />
      </div>
    </div>
  );
}
