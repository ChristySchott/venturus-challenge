import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Select, { SelectProps } from '.';

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

export default {
  title: 'Select',
  component: Select,
  args: {
    options,
  },
} as Meta;

export const Default: Story<SelectProps> = args => <Select {...args} />;
