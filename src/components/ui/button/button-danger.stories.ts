import type { Meta, StoryObj } from '@storybook/react';
import { ButtonDanger } from './button-danger';

const meta = {
  title: 'components/ui/button/ButtonDanger',
  component: ButtonDanger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ButtonDanger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'Delete',
    onClick: () => {},
  },
};
