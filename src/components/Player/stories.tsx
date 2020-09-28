import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Player, { PlayerProps } from '.';

export default {
  title: 'Player',
  component: Player,
  args: {
    name: 'Christy',
    age: '19',
    nationality: 'Brazil',
  },
} as Meta;

export const Default: Story<PlayerProps> = args => <Player {...args} />;
