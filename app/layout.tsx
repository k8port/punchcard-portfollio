import type { Metadata } from "next";
import {
  Alex_Brush,
  Cormorant_Garamond,
  IBM_Plex_Mono,
  Inconsolata,
  Poiret_One,
  Proza_Libre,
} from "next/font/google";
import "./styles/globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const alexBrush = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: ["400"],
});

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

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["400"],
});

const poiretOne = Poiret_One({
  variable: "--font-poiret-one",
  subsets: ["latin"],
  weight: ["400"],
});

const prozaLibre = Proza_Libre({
  variable: "--font-proza-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "k8port | Kate Portalatin",
  description: "Kate Portalatin's (k8port) portfolio build using Next.js 13, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alexBrush.variable} ${cormorantGaramond.variable} ${ibmPlexMono.variable} ${inconsolata.variable} ${poiretOne.variable} ${prozaLibre.variable}`}>
        <Header />
        <main className="p-5 bg-pearl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}