/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,js}"],
  theme: {
    extend: {
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
      },
      keyframes:{
        "open-menu": {
          '0%': {transform: 'screenY(0)'},
          '80%': {transform: 'screenY(1.2)'},
          '100%': {transform: 'screenY(1)'},
        }
      },
    },
  },
  plugins: [],
}



