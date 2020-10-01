import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TopFiveList, { TopFiveListProps } from '.';

const teams = [
  {
    id: '1',
    name: 'AC Milan',
    avgAge: '31.9',
  },
  {
    id: '2',
    name: 'FC Nantes',
    avgAge: '28.3',
  },
  {
    id: '3',
    name: 'Grêmio',
    avgAge: '27.9',
  },
  {
    id: '4',
    name: 'Inter',
    avgAge: '25.6',
  },
];

export default {
  title: 'TopFiveList',
  component: TopFiveList,
  args: {
    title: 'Highest avg age',
    list: teams,
  },
} as Meta;

export const Default: Story<TopFiveListProps> = args => (
  <TopFiveList {...args} />
);
