module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'expaaand-pink': '#f52462',
      }
    },
    fontFamily: {
      'sans': ['Roboto'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
