// app/ui/PunchCard.tsx
import { ReactNode } from "react";
import Image from "next/image";

interface PunchCardProps {
  children: ReactNode;
}

export default function PunchCard({ children }: PunchCardProps) {
  return (
    <div className="punch-card max-w-full mx-4">
      <section
        id="home" className="my-5 w-full md:w-2/5 md:float-right px-2 py-2 mr-4 md:ml-4 clearfix bg-ivory/75 rounded-lg relative border-punchcard border-2 group transition-colors duration-300 shadow-punchcard">
        <div className="bg-offwhite/75 relative p-5 overflow-hidden group">
          {/* Bio Section – the child content */}
          <div className="relative z-10">{children}</div>
        
        {/* Optional: background or side image */}
        <Image
            src="/images/punchcard_pink.png"
            alt="Jacquard Loom punch card"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="max-w-full object-cover object-left-top opacity-40 group-hover:opacity-20 transition-opacity duration-300 ease-in-out pointer-events-none"
          />
        </div>
      </section>
    </div>
  );
}
