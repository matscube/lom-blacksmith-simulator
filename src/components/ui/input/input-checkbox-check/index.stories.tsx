import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import { InputCheckboxCheck } from '.';

function InputCheckboxCheckWrapper(
  props: Omit<ComponentProps<typeof InputCheckboxCheck>, 'checked' | 'onChange'>,
) {
  const [checked, setChecked] = useState(false);
  return (
    <InputCheckboxCheck
      size={props.size}
      name={props.name}
      checked={checked}
      onChange={(e) => {
        setChecked(e.target.checked);
      }}
    ></InputCheckboxCheck>
  );
}

const meta = {
  title: 'components/ui/input/InputCheckboxCheck',
  component: InputCheckboxCheckWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof InputCheckboxCheckWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'completed',
  },
};

export const Size40: Story = {
  args: {
    size: 40,
    name: 'completed',
  },
};

export const Size60: Story = {
  args: {
    size: 60,
    name: 'completed',
  },
};
