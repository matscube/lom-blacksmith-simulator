import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPrimary } from './button-primary';

const meta = {
  title: 'components/ui/button/ButtonPrimary',
  component: ButtonPrimary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Edit',
    onClick: () => {},
  },
};
