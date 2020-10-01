import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Player } from 'shared/types/Player';

import PlayerCard from '.';

export default {
  title: 'Player',
  component: PlayerCard,
  args: {
    name: 'Christy',
    age: '19',
    nationality: 'Brazil',
  },
} as Meta;

export const Default: Story<Player> = args => (
  <DndProvider backend={HTML5Backend}>
    <PlayerCard {...args} />
  </DndProvider>
);
