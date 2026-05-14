/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#06b6d4'
      }
    }
  },
  plugins: []
}

