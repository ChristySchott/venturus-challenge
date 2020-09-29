import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Tooltip from '.';

const props = {
  player: {
    id: '1',
    name: 'Christy',
    age: '19',
    nationality: 'Brazil',
  },
};

describe('<Tooltip />', () => {
  it('should render the span with zero opacity', () => {
    renderWithTheme(<Tooltip {...props} />);

    expect(screen.getByText('Name:')).toHaveStyle({ opacity: 0 });

    expect(screen).toMatchSnapshot();
  });

  it('should render the player name correctly', () => {
    renderWithTheme(<Tooltip {...props} />);

    expect(screen.getByText(props.player.name)).toBeInTheDocument();
  });
});
