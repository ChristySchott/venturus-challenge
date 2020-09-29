import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PlayerDropArea, { PlayerDropAreaProps } from '.';

export default {
  title: 'PlayerDropArea',
  component: PlayerDropArea,
  args: {
    player: {
      id: '1',
      name: 'Christy',
      age: '19',
      nationality: 'Brazil',
    },
  },
} as Meta;

export const Default: Story<PlayerDropAreaProps> = args => (
  <PlayerDropArea {...args} />
);
