import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'utils/tests/helpers';
import Input from 'components/Input';

import ActionsGroup from '.';

const props = {
  title: 'Team Information',
  children: (
    <div>
      <Input id="test" type="text" error={false} label="Team name" />
      <Input id="test" type="text" error={false} label="Team name" />
    </div>
  ),
};

describe('<ActionsGroup />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ActionsGroup {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();

    expect(screen).toMatchSnapshot();
  });

  it('should render the children correctly', () => {
    renderWithTheme(<ActionsGroup {...props} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(2);
  });
});
