import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import PlayerDropArea from '.';

const props = {
  player: {
    id: '1',
    name: 'Christy',
    age: '19',
    nationality: 'Brazil',
  },
};

describe('<PlayerDropArea />', () => {
  it('should render the player name', () => {
    renderWithTheme(<PlayerDropArea {...props} />);

    expect(screen.getByText(props.player.name)).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });

  it('should render the plus icon', () => {
    renderWithTheme(<PlayerDropArea />);

    expect(screen.getByTestId('plus-icon')).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });
});
