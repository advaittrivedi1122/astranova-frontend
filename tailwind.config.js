/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page-image': "url('./assets/landing_page_background.jpg')"
      }
    },
  },
  plugins: [],
}