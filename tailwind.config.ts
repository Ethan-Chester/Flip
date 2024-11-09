import { Oswald } from "@next/font/google";
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
        background2: "var(--background2)",
        fontColor1: '#'
      },
      fontFamily: {
        noto: ['var(--font-noto-sans)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        // Add more fonts here
      },
    },
  },
  plugins: [],
};
export default config;
