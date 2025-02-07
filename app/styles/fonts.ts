import {
  Roboto_Mono,
  Lobster,
  Cormorant_Garamond,
  Abril_Fatface,
  Charm,
  IBM_Plex_Sans,
  Commissioner,
} from "next/font/google";
import localFont from "next/font/local";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-robotoMono",
});

export const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster",
});

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibmPlexSans",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cormorantGaramond",
});

export const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-abrilFatface",
});

export const charm = Charm({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-charm",
});

export const commissioner = Commissioner({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-commissioner",
});

// Cormorant Garamond variants
export const cormorantGaramondBold = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-Bold.ttf",
  variable: "--font-cormorantGaramond-bold",
});

export const cormorantGaramondItalic = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-Italic.ttf",
  variable: "--font-cormorantGaramond-italic",
});

export const cormorantGaramondLight = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-Light.ttf",
  variable: "--font-cormorantGaramond-light",
});

export const cormorantGaramondMedium = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-Medium.ttf",
  variable: "--font-cormorantGaramond-medium",
});

export const cormorantGaramondSemiBold = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-SemiBold.ttf",
  variable: "--font-cormorantGaramond-semiBold",
});

export const cormorantGaramondBoldItalic = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-BoldItalic.ttf",
  variable: "--font-cormorantGaramond-boldItalic",
});

export const cormorantGaramondLightItalic = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-LightItalic.ttf",
  variable: "--font-cormorantGaramond-lightItalic",
});

export const cormorantGaramondMediumItalic = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-MediumItalic.ttf",
  variable: "--font-cormorantGaramond-mediumItalic",
});

export const cormorantGaramondSemiBoldItalic = localFont({
  src: "../../public/fonts/CormorantGaramond/CormorantGaramond-SemiBoldItalic.ttf",
  variable: "--font-cormorantGaramond-semiBoldItalic",
});

// Roboto Mono variants
export const robotoMonoBold = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-Bold.ttf",
  variable: "--font-robotoMono-bold",
});

export const robotoMonoExtraLight = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-ExtraLight.ttf",
  variable: "--font-robotoMono-extraLight",
});

export const robotoMonoItalic = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-Italic.ttf",
  variable: "--font-robotoMono-italic",
});

export const robotoMonoLight = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-Light.ttf",
  variable: "--font-robotoMono-light",
});

export const robotoMonoMedium = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-Medium.ttf",
  variable: "--font-robotoMono-medium",
});

export const robotoMonoSemiBold = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-SemiBold.ttf",
  variable: "--font-robotoMono-semiBold",
});

export const robotoMonoBoldItalic = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-BoldItalic.ttf",
  variable: "--font-robotoMono-boldItalic",
});

export const robotoMonoExtraLightItalic = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-ExtraLightItalic.ttf",
  variable: "--font-robotoMono-extraLightItalic",
});

export const robotoMonoLightItalic = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-LightItalic.ttf",
  variable: "--font-robotoMono-lightItalic",
});

export const robotoMonoMediumItalic = localFont({
  src: "../../public/fonts/RobotoMono/RobotoMono-MediumItalic.ttf",
  variable: "--font-robotoMono-mediumItalic",
});
