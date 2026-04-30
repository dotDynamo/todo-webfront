import type { Todo } from '../../types/todo';
import styles from './TodoCard.module.css';

export interface TodoCardProps {
  todo: Todo;
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <div className={[styles.card, todo.completed ? styles.cardCompleted : ''].filter(Boolean).join(' ')}>
      <div className={styles.header}>
        <h3 className={[styles.title, todo.completed ? styles.titleCompleted : ''].filter(Boolean).join(' ')}>
          {todo.title}
        </h3>
        <span className={[styles.badge, todo.completed ? styles.badgeCompleted : styles.badgePending].join(' ')}>
          {todo.completed ? 'Completado' : 'Pendiente'}
        </span>
      </div>
      {todo.description && <p className={styles.description}>{todo.description}</p>}
      <p className={styles.date}>Creado: {formatDate(todo.createdAt)}</p>
    </div>
  );
};

export default TodoCard;
