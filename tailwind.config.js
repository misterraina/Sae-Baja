/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(-100%)'}
        }
      },
      animation:{
        marquee: 'marquee 9s linear infinite',
      },
      borderWidth: {
        '1': '1px',
      },
      colors: {
        orange: {
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

