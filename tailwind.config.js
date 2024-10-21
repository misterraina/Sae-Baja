/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderWidth: {
        '1': '1px',
      },
      fontFamily: {
        raleway: ['Arimo', 'sans-serif'],
        four: 600,
      },
      colors: {
        dark:{
          600: "#181C14",
          800: "#3C3D37",
          400: "#697565",
          200: "#ECDFCC"
        },
        orang: {
          100: "#e75104",
          500: '#D97706',
          600: '#B45309',
        },
        bgLight: {
          400: '#fbfaf8',
        },
        lightOrange: {
          400: '#f5d1af',
        }
      }
    },
  },
  plugins: [],
}

