import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import MostLessPickedPlayers, { MostLessPickedPlayersProps } from '.';

export default {
  title: 'MostLessPickedPlayers',
  component: MostLessPickedPlayers,
  args: {
    mostPicked: {
      name: 'Cristiano Ronaldo',
      initials: 'CR',
      rating: '75%',
    },
    lessPicked: {
      name: 'Gareth Bale',
      initials: 'GB',
      rating: '14%',
    },
  },
} as Meta;

export const Default: Story<MostLessPickedPlayersProps> = args => (
  <div style={{ width: '70rem' }}>
    <MostLessPickedPlayers {...args} />
  </div>
);
