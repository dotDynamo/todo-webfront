import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  label?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onPress?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  label = 'Aceptar',
  type = 'button',
  className = '',
  onPress,
}: ButtonProps) => {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} onClick={onPress}>
      {label}
    </button>
  );
};
