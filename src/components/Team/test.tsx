import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import Team from '.';

const props = {
  name: 'Barcelona',
  description: 'Barcelona Squad',
};

describe('<Player />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Team {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();

    expect(screen.getByText(props.description)).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });
});
