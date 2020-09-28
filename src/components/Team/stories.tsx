import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Team, { TeamProps } from '.';

export default {
  title: 'Team',
  component: Team,
  args: {
    name: 'Barcelona',
    description: 'Barcelona Squad',
  },
} as Meta;

export const Default: Story<TeamProps> = args => <Team {...args} />;
