/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily:{
      'mon':['Montserrat',  'serif'],
      'synb':['Syncopate-Bold',  'serif'],
      'synr':['Syncopate-Regular',  'serif'],
    },
    extend: {
      colors:{
        primary: '#2BB4BA',
        secondary: '#233251',
        tr_light: '#727073',
        tr_dark: '#4D4D4D',
      }
    },
  },
  plugins: [],
}

