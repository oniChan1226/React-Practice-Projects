/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'], // Or 'Roboto', 'Poppins', etc.
      },
      colors: {
        customDark: {
          DEFAULT: '#111111',
          light: '#2a2a2a',   
          dark: '#000000',   
        },
        customGray: {
          DEFAULT: '#222222', 
          light: '#3a3a3a',   
          dark: '#1a1a1a',    
        },
        customBlue: {
          DEFAULT: '#1E90FF',
          dark: '#1C86EE', 
        },
        textColors: {
          primary: '#FFFFFF',      // White for primary text
          secondary: '#D3D3D3',    // Light gray for secondary text
          accent: '#A0C4FF',       // Muted blue for links or accents
        },
      },
    },
  },
  plugins: [],
}

