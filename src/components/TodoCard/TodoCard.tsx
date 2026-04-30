import type { Todo } from '../../types/todo';
import { icons } from '../../icons';
import styles from './TodoCard.module.css';

export interface TodoCardProps {
  todo: Todo;
  onClick?: () => void;
  onDelete?: () => void;
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const TodoCard = ({ todo, onClick, onDelete }: TodoCardProps) => {
  const TrashIcon = icons.trash;

  return (
    <div
      className={[styles.card, todo.completed ? styles.cardCompleted : '', onClick ? styles.clickable : ''].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      <div className={styles.header}>
        <h3 className={[styles.title, todo.completed ? styles.titleCompleted : ''].filter(Boolean).join(' ')}>
          {todo.title}
        </h3>
        <div className={styles.actions}>
          <span className={[styles.badge, todo.completed ? styles.badgeCompleted : styles.badgePending].join(' ')}>
            {todo.completed ? 'Completado' : 'Pendiente'}
          </span>
          {onDelete && (
            <button
              className={styles.deleteBtn}
              aria-label="Eliminar tarea"
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
            >
              <TrashIcon />
            </button>
          )}
        </div>
      </div>
      {todo.description && <p className={styles.description}>{todo.description}</p>}
      <p className={styles.date}>Creado: {formatDate(todo.createdAt)}</p>
    </div>
  );
};

export default TodoCard;
