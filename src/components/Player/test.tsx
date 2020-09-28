import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';

import Player from '.';

const props = {
  name: 'Christy',
  age: '19',
  nationality: 'Brazil',
};

describe('<Player />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Player {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();

    expect(screen.getByText(props.age)).toBeInTheDocument();

    expect(screen.getByText(props.nationality)).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });
});
