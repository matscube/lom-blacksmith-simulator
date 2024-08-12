import type { Meta, StoryObj } from '@storybook/react';
import { InputWysiwyg } from './input-wysiwyg';

const meta = {
  title: 'components/ui/input/InputWysiwyg',
  component: InputWysiwyg,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputWysiwyg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    // children: 'Edit',
    // onClick: () => {},
  },
};
