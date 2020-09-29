import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';
import theme from 'styles/theme';

import Radio from '.';

const radios = [
  {
    id: '1',
    value: '',
    label: 'Real',
  },
  {
    id: '2',
    value: '',
    label: 'Fantasy',
  },
];

const props = {
  title: 'Team types',
  radioList: radios,
};

describe('<Radio />', () => {
  it('should render the input radios correctly', () => {
    renderWithTheme(<Radio {...props} />);

    expect(screen.getAllByRole('radio')).toHaveLength(2);

    expect(screen).toMatchSnapshot();
  });

  it('should render the title', () => {
    renderWithTheme(<Radio {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
  });

  it('should render the title with a red font', () => {
    renderWithTheme(<Radio {...props} error />);

    expect(screen.getByText(props.title)).toHaveStyle({
      color: theme.colors.red,
    });
  });
});
