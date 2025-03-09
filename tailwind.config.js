/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
        glacial: ['Glacial Indifference', 'sans-serif'],
        nexa: ['Nexa', 'sans-serif'],
      },
    },
  },
  plugins: [],
};