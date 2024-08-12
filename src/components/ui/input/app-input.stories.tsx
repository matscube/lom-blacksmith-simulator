import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';
import { AppInput } from './app-input';

function AppInputWrapper(props: Omit<ComponentProps<typeof AppInput>, 'value' | 'onChange'>) {
  const [value, setValue] = useState('');
  return (
    <AppInput
      label={props.label}
      type={props.type}
      required={props.required}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    ></AppInput>
  );
}

const meta = {
  title: 'components/ui/input/AppInput',
  component: AppInputWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AppInputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    label: 'Search Keyword',
    type: 'text',
    required: false,
  },
};

export const InputPassword: Story = {
  args: {
    label: 'Password',
    type: 'password',
    required: false,
  },
};

export const InputEmail: Story = {
  args: {
    label: 'Email',
    type: 'email',
    required: false,
  },
};
