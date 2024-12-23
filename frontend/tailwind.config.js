/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enable dark mode based on class
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Add paths to your HTML and JS/TS files
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#FBBF24',
      },
      appearance: {
        standard: 'appearance', // Add the standard property for compatibility
      },
    },
    
  },
  plugins: [require("daisyui")],
};
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {}
  }
}