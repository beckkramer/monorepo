import React from 'react'

import { Helmet } from 'react-helmet'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import light from '../themes/light'

const GlpThemeProvider = ({ children }) => (
  <React.Fragment>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&family=Mukta:wght@300;400&display=swap');
      </style>
    </Helmet>
    <ThemeProvider theme={light}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  </React.Fragment>
)

export default GlpThemeProvider
