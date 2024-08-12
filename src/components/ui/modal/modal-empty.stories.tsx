import type { Meta, StoryObj } from '@storybook/react';
import { ModalEmpty, useModal } from './modal-empty';

function ModalEmptyWrapperWrapper() {
  const useModalValue = useModal({ isOpenFirstly: true });
  return (
    <ModalEmpty useModal={useModalValue}>
      <div>
        <h2>title</h2>
        <p>description</p>
      </div>
    </ModalEmpty>
  );
}

const meta: Meta<typeof ModalEmptyWrapperWrapper> = {
  title: 'components/ui/modal/ModalEmpty',
  component: ModalEmptyWrapperWrapper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof ModalEmptyWrapperWrapper>;

export const Basic: Story = {
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
  args: {},
};
