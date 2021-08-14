module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
