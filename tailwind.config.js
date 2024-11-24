/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        popins:"Poppins",
        inter:"Inter",
      },
      colors:{
        'blue':"#1D72D2",
        'black':"#323A56",
        'grey':"#8A90A5"
      },
    },
  },
  plugins: [],
}
