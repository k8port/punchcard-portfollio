// app/ui/Header.tsx
'use client'

import React from "react";
import Link from "next/link";
import { BsGearWideConnected } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skillset", href: "#skillset" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className={`w-full bg-midnight/90 flex items-center justify-center border-b border-b-skyBlue 
      font-cutiveMono text-bonewhite drop-shadow-section px-0 py-0 ${className}`}>
      <div className="flex flex-grow w-full items-center justify-between px-4">
        <span className="font-lobster text-base sm:text-lg md:text-2xl">Kate Portalatin - Software Engineer</span>
        
        <div className="flex space-x-6 my-2 md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle navigation menu">
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        <nav className="hidden space-x-6 md:flex md:space-x-6">
          <ul className="flex items-center">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.href}>
                <li>
                  <Link href={item.href} className="hover:underline px-1 text-xs sm:text-sm" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
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
