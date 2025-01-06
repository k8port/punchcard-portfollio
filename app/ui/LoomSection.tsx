// app/ui/LoomSection.tsx
import { ReactNode } from "react";

interface LoomSectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function LoomSection({ id, title, children }: LoomSectionProps) {
  return (
    <section id={id} className="mb-8 border-l-4 border-loom pl-5">
      <h2 className="font-cormorant text-2xl text-black mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
