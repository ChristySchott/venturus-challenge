import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import Routes from 'routes';
import { store, persistor } from 'store';

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
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <DndProvider backend={HTML5Backend}>
            <Routes />
          </DndProvider>
          <GlobalStyles />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
