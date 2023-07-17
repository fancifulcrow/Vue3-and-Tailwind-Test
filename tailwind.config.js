/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Arima: ["Arima, cursive"],
        Mulish: ["Mulish, sans-serif"],
      },
    },
  },
  plugins: [],
}