const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',  './layouts/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        "primary": "#2E4DEC",
        "gray": {
          "100": "#F7F8FA",
          "200": "#E5E5E5",
          "300": "#818181",
          "400": "#969696",
        },
        "soft-black": "#222222"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({addUtilities}) => { 
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        }
      }
      addUtilities(utilities)
    })
  ],
}
