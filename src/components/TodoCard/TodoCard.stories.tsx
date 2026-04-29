import type { Meta, StoryObj } from '@storybook/react';
import TodoCard from './TodoCard';

const meta: Meta<typeof TodoCard> = {
  title: 'Components/TodoCard',
  component: TodoCard,
};

export default meta;
type Story = StoryObj<typeof TodoCard>;

const baseTodo = {
  id: '1',
  title: 'Comprar ingredientes',
  description: 'Leche, huevos, pan y mantequilla',
  completed: false,
  createdAt: '2026-04-29T10:00:00',
};

export const Pendiente: Story = {
  args: { todo: baseTodo },
};

export const Completado: Story = {
  args: { todo: { ...baseTodo, completed: true } },
};

export const SinDescripcion: Story = {
  args: { todo: { ...baseTodo, description: '' } },
};
