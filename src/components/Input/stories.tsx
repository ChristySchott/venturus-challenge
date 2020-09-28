import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '.';

export default {
  title: 'Input',
  component: Input,
  args: {
    label: 'Team name',
    placeholder: 'Insert team name',
  },
} as Meta;

export const Default: Story<InputProps> = args => <Input {...args} />;

export const WithError: Story<InputProps> = args => <Input {...args} />;

WithError.args = {
  error: true,
};
