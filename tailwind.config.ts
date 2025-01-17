import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/styles/globals.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorantGaramond: ['"Cormorant Garamond"', "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        robotoMono: ["Roboto Mono", "sans-serif"],
        abrilFatface: ["Abril Fatface", "sans-serif"],
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
        bismol: "#FFB2EF", // bismol
        bismol100: "#FFF0FC", // bismol most light
        bismol200: "#FFE0F9", // bismol very light
        bismol300: "#FFD1F5", // bismol light 
        bismol400: "#FFC1F2", // bismol slightly light 
        bismol500: "#FFB2EF", // bismol
        bismol600: "#E6A0D7", // bismol slightly dark
        bismol700: "#B37DA7", // bismol dark
        bismol800: "#805978", // bismol very dark
        bismol900: "#4C3548", // bismol darkest
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
        indigo: "#5B5097", // indigo
      },
      boxShadow: {
        punchcard: "inset 2px 2px 3px 0 rgba(0,0,0,0.35), 3px 3px 4px 0 rgba(0,0,0,0.35)",
        dropdown: "inset 0 1px 0 0 rgba(125,125,125,0.35), 1px 1px 1px 0 rgba(0,0,0,0.35)",
        default: "inset 0 4px 4px 0 rgba(0,0,0,0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      minHeight: {
        landscape: 'var(--landscape-min-height)',
      },
      margin: {
        footer: 'var(--footer-margin)',
      },
      screens: {
        'xs': '768px',
        'wide-view': '1200px',
        'long': '1300px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.border-punchcard': {
          'border-width': '3px',
          'border-style': 'solid',
          'border-color': theme('colors.lightGreen'),
        },
        '.footer-dynamic': {
          'margin-top': 'var(--footer-margin)', 
        },
        '.inner-shadow': {
          'box-shadow': 'inset 0 4px 6px 0 rgba(0,0,0,0.15)',
        }
      });
    }),
  ],
} satisfies Config;
