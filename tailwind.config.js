/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      },
      gridTemplateColumns: {
        'auto':'repeat(auto-fill, minmax(200px, 1fr))'
      },
      
    },
    screens: {
      sm:"0px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px",
    }
  },
  
  plugins: [],
}