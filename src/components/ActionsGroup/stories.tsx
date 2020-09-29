import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Input from 'components/Input';

import ActionsGroup, { ActionsGroupProps } from '.';

export default {
  title: 'ActionsGroup',
  component: ActionsGroup,
  args: {
    title: 'Team Information',
    children: (
      <div>
        <Input id="test" error={false} label="Team name" />
        <Input id="test" error={false} label="Team name" />
      </div>
    ),
  },
} as Meta;

export const Default: Story<ActionsGroupProps> = args => (
  <div style={{ maxWidth: '40rem' }}>
    <ActionsGroup {...args} />
  </div>
);
