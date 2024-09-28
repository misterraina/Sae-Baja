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
      colors: {
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

