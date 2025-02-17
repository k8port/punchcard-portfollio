import React from "react";
import { lobster } from "../fonts";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${lobster.className} w-full bg-midnight/90 text-vanilla font-lobster flex items-center 
        justify-center p-0 border-none ${className}`}
    >
      <p>
        &copy; {new Date().getFullYear()} Kate Portalatin. All rights reserved.
      </p>
    </footer>
  );
}
