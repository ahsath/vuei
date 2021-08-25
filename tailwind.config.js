module.exports = {
  mode: 'jit',
  prefix: 'vuei-',
  purge: {
    content: ['./index.html', './src/**/*.{vue,js}'],
    options: {
      keyframes: true,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: {
        16: '0.16'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
