import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#0A0A0C",
        velvet: "#141418",
        gold: "#D4AF37",
        bronze: "#A67C2E",
        ivory: "#F8F6F0",
        taupe: "#A09E97",
      },
      fontFamily: {
        display: ["var(--font-cormorant)"],
        sans: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [],
};

export default config;
