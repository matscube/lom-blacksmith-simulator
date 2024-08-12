import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCheckbox } from './button-checkbox';

const meta = {
  title: 'components/ui/button/ButtonCheckbox',
  component: ButtonCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ButtonCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UnChecked: Story = {
  args: {
    emitKey: 1,
    checked: false,
    onUpdated: () => {},
  },
};

export const Checked: Story = {
  args: {
    emitKey: 1,
    checked: true,
    onUpdated: () => {},
  },
};
