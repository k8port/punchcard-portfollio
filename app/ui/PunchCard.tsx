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
        relative
        w-1/2
        p-6
        bg-parchment
        shadow-punch
        border-double 
        border-gray-600
      "
    >

      {/* Bio Section – the child content */}
      <div className="relative z-10 mt-2">{children}</div>

      {/* Optional: background or side image */}
      <Image
        src="/jacquard-punchcard-deadwhite.png"
        alt="Jacquard Punch Card Machine Sketch"
        width={800}
        height={800}
        className="absolute top-0 right-0 w-full h-full opacity-80 pointer-events-none"
      />
    </section>
  );
}
