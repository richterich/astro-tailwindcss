import {fontFamily} from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.astro'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
