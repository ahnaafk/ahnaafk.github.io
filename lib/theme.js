import { extendTheme, textDecoration } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const styles = {
  global: props => ({
    body: {
      bg: mode('#F0EEE9', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4
      },
      'sub-section-title': {
        textDecoration: 'underline',
        fontSize: 18,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4
      },
      'sub-sub-section-title': {
        textDecoration: 'underline',
        fontSize: 16,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 2,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: `Gambarino`,
  body: `Satoshi`
}

const colors = {
  glassTeal: "#88ccca"
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme
