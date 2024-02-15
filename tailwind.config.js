/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{html, js}"],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    
    extend: {
      colors:{
          primary_bg: '#F9F8F4',
          primary: '#FBF4E2',
          primary2: '#B4D51E',
          secondary: '#FFC735',
          secondary2: '#463C74',
          dark: '#000000',
      },
      screens:{
        '2xl' : '1320px'
      },
      fontFamily:{
        meri: 'Merriweather',
        mclaren: 'McLaren',
        rubik: 'rubik'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

