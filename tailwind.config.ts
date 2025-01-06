import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alexBrush: ['"Alex Brush"', "sans-serif"],
        cormorantGaramond: ['"Cormorant Garamond"', "sans-serif"],
        ibmPlexMono: ['"IBM Plex Mono"', "sans-serif"],
        inconsolata: ['"Inconsolata"', "sans-serif"],
        poiretOne: ['"Poiret One"', "sans-serif"],
        prozaLibre: ['"Proza Libre"', "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bonewhite: "#F9F6EE", // bone white
        deadwhite: "#FFDEAD", // dead white
        pistachio: "#F5F5DC", // pistachio
        paleMint: "#A8E6CF", // pale mint
        alabaster: "#EDEADE", // alabaster
        cream: "#FFFDD0", // cream
        linen: "#E9DCC9", // linen
        seashell: "#FFF5EE", // seashell
        parchment: "#FCF5E5", // parchment
        pearl: "#E2DFD2", // pearl
        vanilla: "#F3E5AB", // vanilla
        eggshell: "#F0EAD6", // eggshell
        ivory: "#FFFFF0", // ivory
        cornsilk: "#FFF8DC", // cornsilk
        peach: "#FFE5B4", // peach
        offwhite: "#FAF9F6", // offwhite
        terracotta: "#FF7A5C", // terracotta
        bismol: "#FFB2EF", // bisomol pink
        purple: "#C4A1FF", // light purple
        skyBlue: "#87CEEB", // sky blue
        lightGreen: "#90EE90", // light green
        lightSalmon: "#FFA07A", // light salmon
        pink: "#FFC0CB", // pink
        tropicsBlue: "#A7DBD8", // tropics blue
        mintGreen: "#BAFCA2", // mint green
        yellow: "#FFDB58", // yellow
        bgpunchcard: "rgba(245, 245, 220, 0.85)",
      },
      boxShadow: {
        punch: "8px 8px 0px rgb(0 0 0 / 0.4)",
        button: "5px 5px 0px #000",
      },
      backgroundImage: {
        'custom-bg': "url('/jacquard-punchcard.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
