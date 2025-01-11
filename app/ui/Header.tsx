// app/ui/Header.tsx

import React from 'react';
import { BsGearWideConnected } from 'react-icons/bs';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skillset", href: "#skillset" },
    { label: "Experience", href: "#experience" },
    { label: "Open Source", href: "#open-source" },
  ];

  return (
    <header className="w-full bg-midnight/90 flex flex-shrink-0 items-center justify-center border-b border-b-skyBlue 
      font-cutiveMono text-bonewhite drop-shadow-section px-0 py-0">
      <div className="flex w-full items-center justify-between px-4">
        <span className="font-lobster text-base sm:text-lg md:text-xl">Kate Portalatin - Software Engineer</span>
        <nav>
          <ul className="flex items-center">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.href}>
                <li>
                  <a href={item.href} className="hover:underline px-1 text-xs sm:text-sm">
                    {item.label}
                  </a>
                </li>
                {/* Display icon unless is last item */}
                {idx < navItems.length - 1 && (
                  <li aria-hidden="true" className="mx-1">
                    <BsGearWideConnected className="text-xs" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
