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
        cormorantGaramond: ['"Cormorant Garamond"', "sans-serif"],
        ibmPlexMono: ['"IBM Plex Mono"', "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        lobsterTwo: ["Lobster Two", "sans-serif"],
      },
      colors: {
        midnight: "#191970", // midnight blue
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
        skyBlue: "#87CEEB", // sky blue
        lightGreen: "#90EE90", // light green
        lightSalmon: "#FFA07A", // light salmon
        pink: "#FFC0CB", // pink
        tropicsBlue: "#A7DBD8", // tropics blue
        mintGreen: "#BAFCA2", // mint green
        yellow: "#FFDB58", // yellow
        agedParchment: "#F8ECD5", // aged parchment
        darkTeal: "#2B4F4F", // dark teal
        industrialGray: "#3C3C3C", // industrial gray
        antiqueBlack: "#111111", // antique black
        sepiaBrown: "#534F32", // sepia brown
        texturedBrass: "#C0A568", // textured brass
        deepCopper: "#8D5524", // deep copper
        goldenYellow: "#D4AF37", // golden yellow
      },
      dropShadow: {
        'section': "8px 8px 8px 0 rgb(255 255 255 / 0.35)",
      },
      plugins: [require("tailwind-scrollbar")],
    },
  },
  plugins: [],
} satisfies Config;
