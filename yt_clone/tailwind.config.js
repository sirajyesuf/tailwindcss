/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
      spacing:{
        '14':'3.5rem'
      }
    },
  },
  plugins: [],
}