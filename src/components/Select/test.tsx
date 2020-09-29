import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import Select from '.';

const options = [
  {
    id: '1',
    value: 'AC Milan',
    label: 'AC Milan',
  },
  {
    id: '2',
    value: 'FC Nantes',
    label: 'FC Nantes',
  },
  {
    id: '3',
    value: 'Grêmio',
    label: 'Grêmio',
  },
  {
    id: '4',
    value: 'Inter',
    label: 'Inter',
  },
];

const props = {
  options,
};

describe('<Select />', () => {
  it('should render the options', () => {
    renderWithTheme(<Select {...props} />);

    expect(screen.getAllByRole('option')).toHaveLength(4);

    expect(screen).toMatchSnapshot();
  });
});
