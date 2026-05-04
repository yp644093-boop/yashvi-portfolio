/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // .tsx added
],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a", // Black
        accent: "#3b82f6",  // Blue
        secondary: "#171717", // Greyish Black
      },
    },
  },
  plugins: [],
}