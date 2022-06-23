module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundColor: {
        'theme-orange': '#ffa427',
        'theme-red': '#fd3607',
        'theme-brown': '#ab5f12',
        'theme-green': '#44950a',
      },
      screens: {
        'sm': '512px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      colors: {
        'theme-green': '#44950a'
      }
    },
  },
  plugins: [],
}
