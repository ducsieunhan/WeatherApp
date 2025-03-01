/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        strong: "#24498f",
        medium: "#006b3d",
        light: "#6ac3e0"
      }
    },
    fontSize: {
      10: '10px'
    }
  },
  plugins: [],
}

