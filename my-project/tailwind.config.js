
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        'secondary': '#1A4E38',
        'accent': '#B12B22',
        'text': '#2C2C2C',
        'shade': '#90D3C9',
       
      },
      
    },
  },
  plugins: [],
};