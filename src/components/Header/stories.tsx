import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

import Header, { HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
  args: {
    user: 'Christy Hauschild',
  },
} as Meta;

export const Default: Story<HeaderProps> = args => (
  <BrowserRouter>
    <Header {...args} />
  </BrowserRouter>
);
