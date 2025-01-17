/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: { // Use a colon here
        primary: '#FFFFFF', 
        secondary: '#f42c37', 
        brandwhite: '#FFFFFF',
        brandblue: '#1376f4',
      },
      container:{
        center:true,
        padding:{
          default: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  plugins: [],
};
