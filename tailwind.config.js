module.exports = {
  content: ['./App.tsx', './components/**/*.{ts,tsx} ', './assets/**/*.jpg'],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '256': '64rem',
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2.5rem',
        '3xl': '3.5rem',
      },
      backgroundImage: {
        'wood-pattern': 'url("./assets/background.jpg")',
        'scroll': 'url("./assets/scroll.png")',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
