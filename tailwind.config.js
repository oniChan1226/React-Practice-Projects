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
          dark: '#23272f',    
        },
        customBlue: {
          DEFAULT: '#57c4dc',
          light: '#57c4ec',
          dark: '#293542',
          darker: '#1a333d',
        },
        textColors: {
          primary: '#FFFFFF',      // White for primary text
          secondary: '#D3D3D3',    // Light gray for secondary text
          accent: '#57c4dc',       // Muted blue for links or accents
        },
      },
    },
  },
  plugins: [],
}

