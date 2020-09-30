import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

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

export const Default: Story<Player> = args => <PlayerCard {...args} />;
