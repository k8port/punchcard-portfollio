// app/ui/Header.tsx

import React from 'react';

export default function Header() {
  return (
    <header className={`
        w-full
        max-w-[1440px]
        mx-auto
        bg-midnight/90
        flex
        flex-shrink-0
        items-center
        justify-center
        p-1
        md:p-2  
        border-b 
        border-b-skyBlue   
        font-ibmPlexMono
        text-bonewhite
        text-sm
        drop-shadow-section
      `}>
      <div className="flex w-full max-w-[1440px] items center justify-between px-8">
        <span className="font-lobster text-xl md:text-2xl">Kate Portalatin - Software Engineer</span>

      <nav>
        <ul className="flex space-x-4 py-2 text-xs">
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
