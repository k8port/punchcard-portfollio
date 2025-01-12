// app/ui/Header.tsx
'use client'

import React, { useState } from "react";
import Link from "next/link";
import { BsGearWideConnected } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log('toggleMenu open?', isOpen);
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className={`w-full bg-midnight/90 flex items-center justify-between border-b border-b-skyBlue 
      font-cutiveMono text-white drop-shadow-section px-0 py-0 ${className}`}>
      <div className="flex flex-grow w-full items-center justify-between px-4">
        <span className="font-lobster text-base sm:text-lg md:text-2xl">
          Kate Portalatin - Software Engineer
        </span>
        
        <div className="flex space-x-6 my-2 md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        <nav className={`absolute sm:relative sm:flex sm:space-x-6 right-6 top-12 sm:top-0 w-[30%] sm:w-auto
          bg-white sm:bg-transparent text-black sm:text-white border sm:border-0 rounded-md
          shadow-md sm:shadow-none p-0 sm:p-0 space-y-4 sm:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden sm:flex"
          }`}
        >
          <ul className="flex flex-col sm:flex-row divide-y-[0.5px] sm:divide-y-0 sm:items-center">
            {navItems.map((item, idx) => (
              <React.Fragment key={item.href}>
                <li className="hover:bg-mintGreen active:bg-midnight sm:hover:bg-transparent sm:active:bg-transparent sm:w-full">
                  <Link 
                    href={item.href} 
                    className="block px-4 py-2 rounded-md sm:px-1 text-sm sm:text-sm hover:text-black
                      sm:hover:text-white hover:font-semibold sm:hover:font-normal active:text-seashell" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </li>
                {idx < navItems.length - 1 && (
                  <li aria-hidden="true" className="hidden sm:inline mx-2">
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
