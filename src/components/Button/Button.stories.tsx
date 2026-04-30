import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: 'Aceptar', variant: 'primary' },
};

export const Danger: Story = {
  args: { label: 'Eliminar', variant: 'danger' },
};
