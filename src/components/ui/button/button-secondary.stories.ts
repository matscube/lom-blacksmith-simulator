import type { Meta, StoryObj } from '@storybook/react';
import { ButtonSecondary } from './button-secondary';

const meta = {
  title: 'components/ui/button/ButtonSecondary',
  component: ButtonSecondary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ButtonSecondary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Cancel',
    onClick: () => {},
  },
};
