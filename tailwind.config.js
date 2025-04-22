/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {},
    colors:{
      primary: "#FFFF",
      secondary: "#4c5e8d",
      grey:"#D9D9D9",
      grey2:'#3B4C6B',
      white: "#FFFFFF"
    },
  },
  plugins: [
    require('daisyui')
  ],
}

