/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors:{
        primary: "#01102A",
        secondary: "#4c5e8d",
        grey:"#D9D9D9",
        grey2:'#3B4C6B',
        white: "#FFFFFF",
        blue: "#26A1F9",
        spotlight: "#6E75C5"

      },
      fontFamily: {
        'jersey': ['jersey', 'sans-serif'], 
        'jaro': ['jaro', 'sans-serif'],
        'plexMono': ['plexMono', 'sans-serif']
      },
    },
    
  },
  plugins: [
    require('daisyui')
  ],
}

