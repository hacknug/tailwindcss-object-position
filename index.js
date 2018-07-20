module.exports = function (variants) {
  return function ({ addUtilities }) {
    addUtilities(
      {
        '.object-top': { objectPosition: 'top' },
        '.object-right': { objectPosition: 'right' },
        '.object-bottom': { objectPosition: 'bottom' },
        '.object-left': { objectPosition: 'left' },
        '.object-center': { objectPosition: 'center' },

        '.object-right-top': { objectPosition: 'right top' },
        '.object-right-bottom': { objectPosition: 'right bottom' },

        '.object-left-top': { objectPosition: 'left top' },
        '.object-left-bottom': { objectPosition: 'left bottom' },

        '.object-center-top': { objectPosition: 'center top' },
        '.object-center-bottom': { objectPosition: 'center bottom' },
      },
      variants
    )
  }
}
