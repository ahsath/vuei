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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
