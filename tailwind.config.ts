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
        sans: ['"Public Sans"', "sans-serif"],
        coromant: ['"Coromant"', "sans-serif"],
        mono: ['"Noto Sans Mono"', "monospace"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "FF7A5C", // red
        secondary: "FFB2EF", // pink
        tertiary: "C4A1FF", // light purple
        accent1: "87CEEB", // blue
        accent2: "90EE90", // green
        accent3: "F4D738", // yellow
        accent4: "A388EE", // purple
        accent5: "FFA07A", // light red
        accent6: "FFC0CB", // light pink
        accent7: "A7DBD8", // light blue
        accent8: "BAFCA2", // light green
        accent9: "FFDB58", // light yellow
      },
      boxShadow: {
        punch: "8px 8px 0px #000",
        button: "5px 5px 0px #000",
      }
    },
  },
  plugins: [],
} satisfies Config;
