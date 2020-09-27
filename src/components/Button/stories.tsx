import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Plus } from '@styled-icons/boxicons-regular/Plus';
import Button from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export const Default: Story = args => <Button {...args} />;

Default.args = {
  children: 'Buy now',
};

export const withIcon: Story = args => <Button {...args} />;

withIcon.args = {
  size: 'small',
  icon: <Plus />,
};

export const asLink: Story = args => <Button {...args} />;

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link',
};
