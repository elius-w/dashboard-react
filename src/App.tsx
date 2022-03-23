import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

import Routes from './routes'

import { dark } from './styles/themes/dark'


export const App = () => {
  return (
    <ThemeProvider theme={ dark }>
        <GlobalStyles/>
        <Routes/>
    </ThemeProvider>
  )
}

export default App
