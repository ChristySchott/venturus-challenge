import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';
import theme from 'styles/theme';

import Input from '.';

const props = {
  label: 'Team name',
  placeholder: 'Insert team name',
  id: 'team',
  error: false,
};

describe('<Input />', () => {
  it('should render the label correctly', () => {
    renderWithTheme(<Input {...props} />);

    expect(screen.getByText(props.label)).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });

  it('should render the label with a red font', () => {
    renderWithTheme(<Input {...props} error />);

    expect(
      screen.getByPlaceholderText(/insert team name/i),
    ).toBeInTheDocument();

    expect(screen.getByText(props.label)).toHaveStyle({
      color: theme.colors.red,
    });
  });
});
