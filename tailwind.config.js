/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors:{
      'darkcyan': '	#19a2ae',
      'verydarkdesaturatedblue': '#2d3248',
      'darkgrayishblue': '#6a6f81',
      'darkgray': '#969696',
      'white': '#ffff'
    },
    fontFamily: {
      'kumbhsans': ['Kumbh Sans', 'sans-serif']
    },
    backgroundImage: {
      'patterntop': "url('./images/bg-pattern-top.svg')",
      'patternbot': "url('./images/bg-pattern-bottom.svg')"
    },
    extend: {},
  },
  plugins: [],
}

