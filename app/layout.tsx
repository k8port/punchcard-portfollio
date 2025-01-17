import React from "react";
import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Head from "next/head";
import { cormorantGaramond, robotoMono, lobster, abrilFatface } from "./ui/fonts";

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
    <html lang="en" className="h-full w-full scroll-auto">
        <Head>
        <title>Kate Portalatin | Software Engineer</title>
        <meta
          name="description"
          content="Kate Portalatin's portfolio build using Next.js 13, Tailwind CSS, and TypeScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="k8port | Kate Portalatin" />
        <meta
          property="og:description"
          content="Kate Portalatin's software portfolio built using Next.js 13."
        />
        <meta property="og:url" content="https://k8port.github.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`
        flex flex-col m-0 p-0 box-border 
        ${cormorantGaramond.className} 
        ${robotoMono.className} 
        ${lobster.className} 
        ${abrilFatface.className}
      `}>
       
        <Header className="fex-none sticky top-0 z-50" />
        
        {/* Main Content grows to fill available space, horizontal`overflow hidden */}
        <main className="flex-grow overflow-x-hidden">
          {children}
        </main>
       
        {/* Footer stays pinned to bottom of page */}
        <Footer className="flex-none"/>
      </body>
    </html>
  );
}