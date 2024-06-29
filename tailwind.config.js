/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#003F7D",
        secondary: "#F98149",
        tertiary: "#8A948C"
      },
        fontFamily: {
          sans: ['Poppins', ...defaultTheme.fontFamily.sans]
        }
    },
  },
  plugins: [],
}