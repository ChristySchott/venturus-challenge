import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithTheme } from 'shared/utils/tests/helpers';

import Header from '.';

const props = {
  user: 'Christy Hauschild',
};

describe('<Header />', () => {
  it('should render the initials', () => {
    renderWithTheme(
      <BrowserRouter>
        <Header {...props} />
      </BrowserRouter>,
    );

    expect(screen.getByText('CH')).toBeInTheDocument();
  });

  it('should contain an alt text', () => {
    renderWithTheme(
      <BrowserRouter>
        <Header {...props} />
      </BrowserRouter>,
    );

    expect(
      screen.getByAltText(/círculo branco com um V de Venturus no centro/i),
    ).toBeInTheDocument();
  });
});
