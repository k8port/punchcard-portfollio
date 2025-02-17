import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import {
  themeColors,
  themeMetallics,
  themeInks,
  proficiencyScale,
} from "./app/styles/color/colors";
import {
  shadesOfWhite,
  ashenTints,
  misspiggyTints,
  seashellTints,
  shadesOfGrey,
} from "./app/styles/color/shades_tints";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/styles/globals.css",
    "./app/styles/fonts.css",
    "./app/styles/colors/colors.ts",
    "./app/styles/icons.ts",
    "./app/styles/colors/shades_tints.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: "var(--font-lobster), cursive",
        charm: "var(--font-charm), cursive",
        martianMono: "var(--font-martianMono), sans-serif",
        ballet: "var(--font-ballet), cursive",
        cormorantGaramond: "var(--font-cormorantGaramond), serif",
        spaceGrotesk: "var(--font-spaceGrotesk), sans-serif",
        playfairDisplay: "var(--font-playfairDisplay), serif",
        roboto: "var(--font-roboto), sans-serif",
        sail: "var(--font-sail), cursive",
      },
      colors: {
        // whites
        ...shadesOfWhite,
        ...themeMetallics,
        ...themeInks,
        ...themeColors,
        ...ashenTints,
        ...misspiggyTints,
        ...seashellTints,
        ...proficiencyScale,
        ...shadesOfGrey,
      },
      boxShadow: {
        punchcard:
          "inset 2px 2px 3px 0 rgba(0,0,0,0.35), 3px 3px 4px 0 rgba(0,0,0,0.35)",
        dropdown:
          "inset 0 1px 0 0 rgba(125,125,125,0.35), 1px 1px 1px 0 rgba(0,0,0,0.35)",
        default:
          "inset 0 4px 4px 0 rgba(0,0,0,0.25), 0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        definition:
          "inset 1px 1px 2px 5px rgba(64,64,79,0.15), inset -1px -1px 2px 2px rgba(64,64,79,0.15)",
      },
      minHeight: {
        landscape: "var(--landscape-min-height)",
      },
      margin: {
        footer: "var(--footer-margin)",
      },
      screens: {
        xs: "768px",
        "wide-view": "1200px",
        long: "1300px",
      },
      fontSize: {
        xs: "0.75rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        ".border-punchcard": {
          "border-width": "3px",
          "border-style": "solid",
          "border-color": theme("colors.palemint"),
        },
        ".bio-label": {
          "font-family": "Martian Mono",
          "font-size": "0.75rem",
          "font-weight": "normal",
          color: theme("colors.lightgreen"),
          "background-color": theme("colors.antiqueblack"),
          "border-radius": "4px",
          padding: "1px",
        },
        ".footer-dynamic": {
          "margin-top": "var(--footer-margin)",
        },
        ".inner-shadow": {
          "box-shadow": "inset 0 4px 6px 0 rgba(0,0,0,0.15)",
        },
        ".inner-shadow-sm": {
          "box-shadow": "inset 0 2px 3px 0 rgba(0,0,0,0.05)",
        },
        ".motto-text-shadow": {
          "text-shadow": "1px 1px 0 rgba(64, 64, 79, 0.95)",
          color: theme("colors.bonewhite"),
        },
        ".header-shadow": {
          "text-shadow": "1px 1px 1px rgba(25, 25, 112, 1)",
          color: theme("colors.aliceblue"),
          "font-size": "30px",
          "text-align": "center",
          "font-family": "var(--font-lobster), serif, italic",
        },
        ".site-wrap": {
          position: "relative",
          width: "100%",
          height: "100%",
        },
        ".subtopic-text": {
          color: "#777",
          "font-size": "12px",
          "font-family": "var(--font-spaceGrotesk), sans-serif",
        },
        ".spacer": {
          height: "50px",
        },
      });
    }),
  ],
} satisfies Config;
