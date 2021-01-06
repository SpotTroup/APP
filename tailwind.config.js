module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: theme => ({
        'background': ""

      }),
      zIndex: {
        '-20': '-20',
        '-10': '-10',
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        'auto': 'auto',
      }
    },
  },
  screen: {
    'xs': '799px',
    'sm': '800px',
    'md': '1200px',
    'lg': '1400px',
    'xl': '1600px',
    '2xl': '2000px'
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
