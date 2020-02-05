import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const brandRed = `#e25454`
const blueGray = `#282c35`

export default merge(defaultThemeColors, {
  text: blueGray,
  primary: brandRed,
  heading: blueGray,
  modes: {
    dark: {
      background: blueGray,
      primary: brandRed,
      highlight: brandRed,
    },
  },
})
