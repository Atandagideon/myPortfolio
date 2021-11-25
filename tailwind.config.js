const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.js", "./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      orange: "#ff914d"
    },
    screens: {
      'sp': '350px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1080px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: theme => ({
        'profile-pic1': "url('/public/images/profile-pic.png')",
        'profile-pic2': "url('pic.jpg')",
        'profile-pic3': "url('public/images/shegzy.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [],
}
