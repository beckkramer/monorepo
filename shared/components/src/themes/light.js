import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const COLORS = {
  primary: '#00847e',
  primaryBright: '#66fcf1',
  accent: '#45A29E',
  text: '#0b0c10',
  white: '#fff',
  black: '#000',
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.primary,
      dark: COLORS.black,
    },
    secondary: {
      main: COLORS.primaryBright,
    },
    error: {
      main: red.A400,
    },
    background: {
      dark: COLORS.black,
      light: '#EFEFEF',
      default: COLORS.white,
    },
    text: {
      brand: COLORS.primary,
      default: COLORS.text,
      inverted: COLORS.white,
    },
  },
  button: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: [
      'Mukta',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '1.8rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    overline: {
      fontFamily: 'Jost',
      fontSize: '1.8rem',
      fontWeight: 700,
      letterSpacing: '0',
      lineHeight: '1',
      textTransform: 'none',
    },
    subtitle2: {
      fontFamily: 'Jost',
      fontSize: '1rem',
      fontWeight: 500,
      letterSpacing: '1',
    }
  },
})

export default theme