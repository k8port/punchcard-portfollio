import React from "react";
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Lobster,
  Crimson_Text,
  Cutive_Mono,
} from "next/font/google";
import "./styles/globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
});

const cutiveMono = Cutive_Mono({
  variable: "--font-cutive-mono",
  subsets: ["latin"],
  weight: ["400"], 
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
    <html lang="en" className="h-full w-full overflow-hidden">
      <body className={`
          h-full flex flex-col 
          m-0 p-0 box-border
          ${cormorantGaramond.variable} ${crimsonText.variable} 
          ${lobster.variable} ${cutiveMono.variable}
        `}>
        <Header className="sticky top-0 z-50" />
        <main className="flex-grow w-full overflow-y-auto">
            {children}
            <Footer />
        </main>
      </body>
    </html>
  );
}