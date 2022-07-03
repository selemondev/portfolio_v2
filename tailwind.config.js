/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        "Inter": "Inter",
        "Splash": "Splash",
        "Roboto": "Roboto",
        "Mono": 'Rubik Mono One'
      }
    },
  },
  plugins: [],
}