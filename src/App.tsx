import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Routes from 'routes';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

export type ThemeType = typeof theme;

export function collect(
  connect: { dragSource: () => any },
  monitor: { isDragging: () => any },
) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <Routes />
      </DndProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
