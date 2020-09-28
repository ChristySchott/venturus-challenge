import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Plus } from '@styled-icons/boxicons-regular/Plus';

import Button from 'components/Button';

import WrapperList, { WrapperListProps } from '.';

export default {
  title: 'WrapperList',
  component: WrapperList,
  args: {
    title: 'My teams',
  },
} as Meta;

export const Default: Story<WrapperListProps> = args => (
  <WrapperList {...args} />
);

export const WithButton: Story<WrapperListProps> = args => (
  <WrapperList {...args} />
);

WithButton.args = {
  button: <Button icon={<Plus />} size="small" />,
};
