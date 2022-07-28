module.exports = {
  content: [ './App.tsx', './components/**/*.tsx' ],
  theme: {
    extend: {
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        // make a rounded border for the header that
        // is rounded on the bottom only with a radius of 1.5rem
        'header': '1.5rem 1.5rem 0 0',
      },
      height: {
        '12': '3rem',
        'header': '12.5%',
      }
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
