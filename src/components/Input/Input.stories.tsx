import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Texto: Story = {
  args: {
    label: 'Correo',
    type: 'email',
    placeholder: 'ejemplo@correo.com',
  },
};

export const Contrasena: Story = {
  args: {
    label: 'Contraseña',
    type: 'password',
    showPasswordToggle: true,
    placeholder: '••••••••',
  },
};
