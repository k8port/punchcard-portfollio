// app/ui/Footer.tsx
import React from 'react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
    return (
      <footer className={`
        w-full 
        footer-dynamic
        mx-auto
        bg-midnight/90
        text-vanilla
        font-lobster
        flex
        items-center
        justify-center
        p-0
        md:p-0
        border-none
        wide-view:mt-[360px]
        xs:mt-[900px]
        ${className}
      `}>
        <p>&copy; {new Date().getFullYear()} Kate Portalatin. All rights reserved.</p>
      </footer>
    );
  }
  