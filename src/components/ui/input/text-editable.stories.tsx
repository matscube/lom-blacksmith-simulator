import type { Meta, StoryObj } from '@storybook/react';
import { TextEditable } from './text-editable';

const meta: Meta<typeof TextEditable> = {
  title: 'components/ui/input/TextEditable',
  component: TextEditable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof TextEditable>;

export const Basic: Story = {
  decorators: [
    (Story) => (
      <div className='border border-black p-4'>
        <Story />
      </div>
    ),
  ],
  args: {
    name: 'description',
    text: 'This is a description.\nThis is a description.\nThis is a description.',
    type: 'textarea',
    onUpdate: () => {},
  },
};
