import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: "#EED9C4",
      },
      fontFamily: {
        honk: ["'Honk'", "sans-serif"],
        serif: ["'Noto Serif'", "serif"],
        sans: ["'Roboto'", "sans-serif"],
        playfair: ["'Playfair Display'", "serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marqueeReverse: "marqueeReverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
