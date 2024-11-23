import { Container } from "postcss";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      Container :{
        center: true,
        padding: "15px"
      },
      colors:{
        accent: "#6BAD0D",
        accentDark: "629F0C",
      }
      
      },
    },
  plugins: [],
} satisfies Config;
