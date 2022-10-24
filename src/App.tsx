/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Paths from './routes';

import { useTheme } from './hooks/theme';

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Paths />
    </ThemeProvider>
  );
}

export default App;
