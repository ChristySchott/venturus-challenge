import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import TopFiveList from '.';

const teams = [
  {
    id: '1',
    name: 'AC Milan',
    avgAge: '31.9',
  },
  {
    id: '2',
    name: 'FC Nantes',
    avgAge: '28.3',
  },
  {
    id: '3',
    name: 'Grêmio',
    avgAge: '27.9',
  },
  {
    id: '4',
    name: 'Inter',
    avgAge: '25.6',
  },
];

const props = {
  title: 'Highest avg age',
  list: teams,
};

describe('<TopFiveList />', () => {
  it('should render the first list name', () => {
    renderWithTheme(<TopFiveList {...props} />);

    expect(screen.getByText(props.list[0].name)).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });

  it('should render all items in the list', () => {
    renderWithTheme(<TopFiveList {...props} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });
});
