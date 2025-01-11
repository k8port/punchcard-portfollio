// app/ui/Header.tsx

import React from 'react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`
        w-full
        bg-midnight/90
        flex
        flex-shrink-0
        items-center
        justify-center
        border-b 
        border-b-skyBlue   
        font-ibmPlexMono
        text-bonewhite
        drop-shadow-section
        px-2
        py-2
        sm:px-4
        sm:py-3
        md:px-6
        md:py-4
        text-xs
        sm:text-sm
        md:text-base
        ${className ?? ""}
      `}>
      <div className="flex w-full items-center justify-between px-8">
        <span className="font-lobster text-base sm:text-lg md:text-2xl">Kate Portalatin - Software Engineer</span>
        <nav>
          <ul className="flex space-x-2 sm:space-x-4 py-1">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#skillset" className="hover:underline">
                Skillset
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#open-source" className="hover:underline">
                Open Source
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
