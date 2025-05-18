/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        // Neutrals
        sand: {
          DEFAULT: '#e9e4da',
          light: '#f7f5f0',
          dark: '#d5c5b2',
        },
        clay: {
          DEFAULT: '#e6d6c3',
          red: '#8b3a2e',
        },
        forest: {
          DEFAULT: '#37513a',
        },
        accent: {
          green: '#37513a',
          red: '#8b3a2e',
        }
      },
    },
  },
  plugins: [],
};
