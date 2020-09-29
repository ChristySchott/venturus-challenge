import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import Button from 'components/Button';
import TopFiveList from 'components/TopFiveList';

import WrapperList from '.';

const teams = [
  {
    id: '1',
    name: 'AC Milan',
    average: '31.9',
  },
  {
    id: '2',
    name: 'FC Nantes',
    average: '28.3',
  },
  {
    id: '3',
    name: 'Grêmio',
    average: '27.9',
  },
  {
    id: '4',
    name: 'Inter',
    average: '25.6',
  },
];

const props = {
  title: 'My teams',
  button: <Button size="small" />,
  children: <TopFiveList title="List" list={teams} />,
};

describe('<WrapperList />', () => {
  it('should render the button', () => {
    renderWithTheme(<WrapperList {...props} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render the title', () => {
    renderWithTheme(<WrapperList {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it('should render the children list correctly', () => {
    renderWithTheme(<WrapperList {...props} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(4);
  });
});
