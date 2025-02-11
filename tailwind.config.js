/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lagos': "url('/assets/lagos.png')",  // Custom background image
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.main-container': {
          padding: '10px',  // Mobile-first padding
          backgroundColor: '#f6f8f8',  // Light background for the container
        },
        '@screen sm': {
          '.main-container': {
            padding: '20px',  // Small screens (640px+)
          },
        },
        '@screen md': {
          '.main-container': {
            padding: '40px',  // Medium screens (768px+)
          },
        },
        '@screen lg': {
          '.main-container': {
            padding: '60px',  // Large screens (1024px+)
          },
        },
      });
    },
  ],
}
