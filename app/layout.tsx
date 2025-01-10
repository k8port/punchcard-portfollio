import React from "react";
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Lobster,
  Lobster_Two,
} from "next/font/google";
import "./styles/globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
});

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "k8port | Kate Portalatin",
  description: "Kate Portalatin's (k8port) portfolio build using Next.js 13, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` 
        flex flex-col min-h-screen
        ${cormorantGaramond.variable} ${ibmPlexMono.variable} 
        ${lobster.variable} ${lobsterTwo.variable}
      `}>
        <Header />
          <main className="flex-grow p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}