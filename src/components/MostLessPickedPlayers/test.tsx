import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import MostLessPickedPlayers from '.';

const props = {
  mostPicked: {
    name: 'Cristiano Ronaldo',
    initials: 'CR',
    rating: 75,
  },
  lessPicked: {
    name: 'Gareth Bale',
    initials: 'GB',
    rating: 14,
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
      screen.getByRole('heading', { name: props.mostPicked.rating.toString() }),
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
      screen.getByRole('heading', { name: props.lessPicked.rating.toString() }),
    ).toBeInTheDocument();
  });
});
