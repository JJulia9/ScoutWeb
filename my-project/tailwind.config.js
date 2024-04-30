
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'heading': ['Mochiy Pop P One', 'sans-serif'],
        'paragraph': ['Varela Round', 'sans-serif'],
      },

      colors: {
        'background': '#FFFAF5',
        'primary': '#F1B22D',
        'secondary': '#277368',
        'accent': '#B12B22',
        'text': '#2C2C2C',
        'shade': '#90D3C9',
       
      },
      
    },
  },
  plugins: [],
};