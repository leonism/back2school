/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html'], 
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        paleGreen: 'hsl(95, 32%, 61%)',
        darkPurple: 'hsl(228, 28%, 20%)',
        plainGray: 'hsl(0, 0%, 45%)',
        mutedGray: 'hsl(0, 0%, 74%)',
        plainOrange: 'hsl(25, 100%, 72%)',
      },
      animation: {
        blob: "blob 5s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },  
      backgroundColor: {
        header: '#FAFAFA',
        peach: '#FFF2F3',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [],
}

