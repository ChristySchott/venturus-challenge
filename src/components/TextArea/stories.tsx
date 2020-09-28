import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TextArea, { TextAreaProps } from '.';

export default {
  title: 'TextArea',
  component: TextArea,
  args: {
    label: 'Team name',
    placeholder: 'Insert team name',
  },
} as Meta;

export const Default: Story<TextAreaProps> = args => <TextArea {...args} />;
