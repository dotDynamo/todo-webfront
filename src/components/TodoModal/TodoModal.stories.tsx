import type { Meta, StoryObj } from '@storybook/react';
import TodoModal from './TodoModal';

const meta: Meta<typeof TodoModal> = {
  title: 'Components/TodoModal',
  component: TodoModal,
};

export default meta;
type Story = StoryObj<typeof TodoModal>;

const baseTodo = {
  id: '550e8400-e29b-41d4-a716-446655440000',
  title: 'Comprar ingredientes',
  description: 'Leche, huevos, pan y mantequilla',
  completed: false,
  createdAt: '2026-04-29T10:00:00',
};

export const Pendiente: Story = {
  args: { todo: baseTodo, onClose: () => {} },
};

export const Completado: Story = {
  args: { todo: { ...baseTodo, completed: true }, onClose: () => {} },
};
