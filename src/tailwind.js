module.exports = {
  theme: {
    extend: {
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .25)'
      }
    }
  },
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-filters')(),
  ]
}
