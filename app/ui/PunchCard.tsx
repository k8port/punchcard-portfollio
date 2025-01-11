// app/ui/PunchCard.tsx
import { ReactNode } from "react";
import Image from "next/image";

interface PunchCardProps {
  children: ReactNode;
}

export default function PunchCard({ children }: PunchCardProps) {
  return (
    <section
      id="home"
      className="
        my-5
        w-full
        md:w-1/3
        md:float-right
        px-2
        py-2
        bg-ivory/75
        rounded-lg
        relative
        border-punchcard
        border-2
        group-hover:border-4
        group-hover:border-double
        group
        transition-colors
        duration-300
        shadow-punchcard
        mr-1
      "
    >
      <div className="bg-offwhite/75 relative p-5 overflow-hidden group">
        {/* Bio Section – the child content */}
        <div className="relative z-10">{children}</div>
      
      {/* Optional: background or side image */}
      <Image
          src="/images/punchcard_pink.png"
          alt="Jacquard Loom punch card"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="
            object-cover 
            object-left-top 
            opacity-50 
            group-hover:opacity-20
            transition-opacity
            duration-300
            ease-in-out
            pointer-events-none
          "
        />
      </div>
    </section>
  );
}
