import React from 'react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={` w-full bg-midnight/90 text-vanilla font-lobster flex items-center 
        justify-center p-4 border-none ${className}`}
    >
      <p>&copy; {new Date().getFullYear()} Kate Portalatin. All rights reserved.</p>
    </footer>
  );
}
