import React from 'react';
import { screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import PlayerDropArea from '.';

const props = {
  row: 1,
  col: 1,
  formation: [1, 2],
  selectPlayer: () => {},
  currentPlayer: undefined,
};

describe('<PlayerDropArea />', () => {
  it('should render the plus icon', () => {
    renderWithTheme(
      <DndProvider backend={HTML5Backend}>
        <PlayerDropArea {...props} />
      </DndProvider>,
    );

    expect(screen.getByTestId('plus-icon')).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });
});
