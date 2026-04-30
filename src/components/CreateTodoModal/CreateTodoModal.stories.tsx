import type { Meta, StoryObj } from '@storybook/react';
import CreateTodoModal from './CreateTodoModal';

const meta: Meta<typeof CreateTodoModal> = {
  title: 'Components/CreateTodoModal',
  component: CreateTodoModal,
};

export default meta;
type Story = StoryObj<typeof CreateTodoModal>;

export const Default: Story = {
  args: {
    onClose: () => {},
    onSubmit: async () => {},
  },
};
