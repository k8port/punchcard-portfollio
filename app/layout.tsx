import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Public_Sans,
  Noto_Sans_Mono,
} from "next/font/google";
import "./styles/globals.css";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
  weight: ["100", "500"],
});

export const metadata: Metadata = {
  title: "k8port | Kate Portalatin",
  description: "Kate Portalatin's (k8port) portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
