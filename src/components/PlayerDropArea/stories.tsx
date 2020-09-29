import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import PlayerDropArea, { PlayerDropAreaProps } from '.';

export default {
  title: 'PlayerDropArea',
  component: PlayerDropArea,
  args: {
    row: 1,
    col: 1,
    formation: [1, 2],
    selectPlayer: () => {},
    currentPlayer: undefined,
  },
} as Meta;

export const Default: Story<PlayerDropAreaProps> = args => (
  <PlayerDropArea {...args} />
);
