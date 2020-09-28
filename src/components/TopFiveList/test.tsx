import React from 'react';
import { render, screen } from '@testing-library/react';

import TopFiveList from '.';

describe('<TopFiveList />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopFiveList />);

    expect(
      screen.getByRole('heading', { name: /TopFiveList/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
