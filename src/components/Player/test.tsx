import React from 'react';
import { screen } from '@testing-library/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import PlayerCard from '.';

const props = {
  id: '1',
  name: 'Christy',
  age: 19,
  nationality: 'Brazil',
};

describe('<Player />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <DndProvider backend={HTML5Backend}>
        <PlayerCard {...props} />
      </DndProvider>,
    );

    expect(screen.getByText(props.name)).toBeInTheDocument();

    expect(screen.getByText(props.age.toString())).toBeInTheDocument();

    expect(screen.getByText(props.nationality)).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });
});
