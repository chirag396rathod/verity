/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        lp: '1400px',
        '3xl':'1700px'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        primary: '#232F55',
        secondary: '#9EA0AD',
        main: '#201F57',
        ternary:'#7D8BB7'
       // placeholder:'#9EA0AD'
      },
      backgroundColor: {
        primary: '#F7F8F8',
        secondary: '#F5F5F5'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      borderColor: {
        primary: '#F2F3F5',
        secondary:'#E1E0F4'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}


