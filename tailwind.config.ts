import { tokens } from "./src/styles/tailwind.tokens";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...tokens.colors,
      },
      spacing: tokens.spacing,
      fontSize: {
        ...tokens.fontSize,
        "h1-desktop": ["4rem", { lineHeight: "1.1", fontWeight: "800" }],
        "h2-desktop": ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
      },
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
      maxWidth: {
        arka: tokens.spacing["container-max"],
        mega: tokens.spacing["mega-menu-w"],
      },
      width: {
        "mega-menu-w": tokens.spacing["mega-menu-w"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px) scale(1.05)" },
        },
        spinSlow: {
          from: { transform: `rotate(0deg)` },
          to: { transform: `rotate(360deg)` },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
