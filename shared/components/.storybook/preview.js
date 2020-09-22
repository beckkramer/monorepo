import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import lightTheme from '../src/themes/light'

const MaterialUiDecorator = (Story) => (
  <ThemeProvider theme={lightTheme}>
    <Story />
  </ThemeProvider>
)

export const decorators = [
  MaterialUiDecorator,
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}