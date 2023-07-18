/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryColor : "#F6EDE4",
        secondaryColor : "#614634"
      },
      fontFamily : {
        Arima: ["Arima, cursive"],
        Mulish: ["Mulish, sans-serif"],
      },
    },
  },
  plugins: [],
}