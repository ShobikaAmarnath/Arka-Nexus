import { tokens } from "./src/styles/tailwind.token";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...tokens.colors,
        brand: tokens.colors.brand,
        neutral: tokens.colors.neutral,
      },
      spacing: tokens.spacing,
      fontSize: {
        'mobile-link': tokens.fontSize['mobile-link'],
        'nav-link': tokens.fontSize['nav-link'],
        'dropdown-link': tokens.fontSize['dropdown-link'],
      },
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
      maxWidth: {
        'arka': tokens.spacing['container-max'],
        'mega': tokens.spacing['mega-menu-w'],
      },
      width: {
        'mega-menu-w': tokens.spacing['mega-menu-w'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}

