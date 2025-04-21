/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
    extend: {
        
        fontFamily: {
            Jaro : ["Jaro"],
            Jersey: ["Jersey"],
            PlexMono: ["PlexMono"],
        },
        
        colors:{
        footer: "#31363F",
        white: "#FFFFFF",
        },
        fontFamily: {
        
        },
        },
        colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        },
    },
    plugins: [
    require('tailwindcss-motion'),
    require('daisyui'),
    ],
};