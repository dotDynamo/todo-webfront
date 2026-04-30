import type { Todo } from '../../types/todo';
import styles from './TodoModal.module.css';

export interface TodoModalProps {
  todo: Todo;
  onClose: () => void;
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const TodoModal = ({ todo, onClose }: TodoModalProps) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{todo.title}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <span className={[styles.badge, todo.completed ? styles.badgeCompleted : styles.badgePending].join(' ')}>
          {todo.completed ? 'Completado' : 'Pendiente'}
        </span>

        {todo.description && (
          <div className={styles.section}>
            <p className={styles.label}>Descripción</p>
            <p className={styles.value}>{todo.description}</p>
          </div>
        )}

        <div className={styles.section}>
          <p className={styles.label}>Fecha de creación</p>
          <p className={styles.value}>{formatDate(todo.createdAt)}</p>
        </div>

        <div className={styles.section}>
          <p className={styles.label}>ID</p>
          <p className={[styles.value, styles.id].join(' ')}>{todo.id}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
