import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { InputRadioProps } from '.';

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

export default {
  title: 'Radio',
  component: Radio,
  args: {
    title: 'Team type',
    radioList: radios,
  },
} as Meta;

export const Default: Story<InputRadioProps> = args => <Radio {...args} />;
