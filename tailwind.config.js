/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
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
        meri: ['Merriweather', 'serif'],
        mclaren: ['McLaren', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
