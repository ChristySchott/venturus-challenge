import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Tooltip, { TooltipProps } from '.';

export default {
  title: 'Tooltip',
  component: Tooltip,
  args: {
    player: {
      id: '1',
      name: 'Christy',
      age: '19',
      nationality: 'Brazil',
    },
  },
} as Meta;

export const Default: Story<TooltipProps> = args => <Tooltip {...args} />;
