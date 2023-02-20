/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      '2xs': '0.5rem'
    },
    screens: {
      'two': '200px',
      'three': '300px',
      'four': '400px',
      'five': '500px',
      'six': '600px',
      'seven': '700px',
      'eight': '800px',
      'nine': '900px',
      'ten': '1000px',
      'eleven': '1100px',
      'twelve': '1200px',
      'thirteen': '1300px'
    },
    extend: {},
    fontFamily: {
      cursive: ['Lobster', 'Press Start 2P', 'Sigmar One']
    }
  },
  plugins: [],
}
