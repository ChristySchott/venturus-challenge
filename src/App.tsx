import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

export type ThemeType = typeof theme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
