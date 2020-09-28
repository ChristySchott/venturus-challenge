import React from 'react';
import { screen } from '@testing-library/react';

import theme from 'styles/theme';
import { renderWithTheme } from 'utils/tests/helpers';

import MostLessPickedPlayers from '.';

const props = {
  mostPicked: {
    name: 'Cristiano Ronaldo',
    initials: 'CR',
    rating: '75%',
  },
  lessPicked: {
    name: 'Gareth Bale',
    initials: 'GB',
    rating: '14%',
  },
};

describe('<MostLessPickedPlayers />', () => {
  it('should render the most picked player correctly', () => {
    renderWithTheme(<MostLessPickedPlayers {...props} />);

    expect(
      screen.getByRole('heading', { name: props.mostPicked.name }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.mostPicked.initials }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.mostPicked.rating }),
    ).toBeInTheDocument();
  });

  it('should render the least picked player player correctly', () => {
    renderWithTheme(<MostLessPickedPlayers {...props} />);

    expect(
      screen.getByRole('heading', { name: props.lessPicked.name }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.lessPicked.initials }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: props.lessPicked.rating }),
    ).toBeInTheDocument();
  });

  it('should render a red border on the least picked player', () => {
    renderWithTheme(<MostLessPickedPlayers {...props} />);

    const initials = screen.getByText('14%');

    expect(initials).toHaveStyle({ border: `2px solid ${theme.colors.red}` });
  });
});
