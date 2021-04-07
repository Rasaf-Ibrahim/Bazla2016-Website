module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {

    extend: {

  // Font-Family
  fontFamily: {
    'regular': ['Roboto', 'sans-serif'],
    'regular-space': ['Roboto Mono', 'monospace'],
    'cursive-1': ['Lobster Two', 'cursive'],
    'cursive-2': ['Kaushan Script', 'cursive'],
    'cursive-3': ['Yatra One', 'cursive'],
    'cursive-4': ['Train One', 'cursive'],
    'handwriting': ['Indie Flower', 'cursive'],
    'bangla-cursive': ['Atma', 'cursive'],
    // Use 'Roboto' to write any language's regular writing.
    // 'lobster-two' in italic format looks better.  
    },


    // Max-width
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
     },

      
    },
  },

  variants: {

    extend: {
      maxWidth: ['hover', 'focus'],
      outline: ['hover', 'active'],
      transitionDelay: ['hover', 'focus'],
      transformOrigin: ['hover', 'focus'],
    },

  },

  plugins: [],
}
