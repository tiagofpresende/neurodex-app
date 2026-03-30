/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean': {
          900: '#1B4965',
          700: '#2D6A8F',
          500: '#5FA8D3',
          300: '#A4D4E4',
          100: '#D9EDF5',
        },
        'lavender': {
          500: '#B8B8D1',
          300: '#D4D4E3',
          100: '#EDEDF3',
        },
        'surface': '#FAFAFA',
        'text': '#4A4A4A',
        'accent': {
          green: '#4CAF50',
          amber: '#FFC107',
          red: '#F44336',
        }
      }
    },
  },
  plugins: [],
}
