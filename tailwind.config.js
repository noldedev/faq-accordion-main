/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light_pink: "hsl(275, 100%, 97%)",
        grayish_purple: "hsl(292, 16%, 49%)",
        dark_purple: "hsl(292, 42%, 14%)",
      },
      fontFamily: {
        font_main: "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
