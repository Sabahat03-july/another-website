import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        accent: "#6BAD0D",
        accentDark: "#629F0C", // Missing # fixed
      },
    },
  },
  plugins: [],
} satisfies Config;
