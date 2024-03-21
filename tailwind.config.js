/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily:{
      'alma':['Almarai',  'serif'],
      'lex':['Lexend Mega',  'serif'],
      'ave':['Average',  'serif'],
      'gus':['Gustavo',  'serif'],
    },
    extend: {},
  },
  plugins: [],
}

