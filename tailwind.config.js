/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backGround_1: '#0F0F0F',
        backGround_2: '#222222',
        primary: '#532E1C',
        secundary: '#C5A880',
        letter: '#E6E6E6',
      }
    },
  },
  plugins: [],
}

