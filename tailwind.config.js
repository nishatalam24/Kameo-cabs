/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    // "./screens/**/*.{js,jsx,ts,tsx}", // Adjust this path as needed
    "./components/**/*.{js,jsx,ts,tsx}", // Adjust this path as needed
    "./icons/**/*.{js,jsx,ts,tsx}" // Adjust this path as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
