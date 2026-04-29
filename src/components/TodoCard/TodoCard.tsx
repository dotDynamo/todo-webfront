import type { Todo } from '../../types/todo';
import styles from './TodoCard.module.css';

export interface TodoCardProps {
  todo: Todo;
}

const TodoCard = ({ todo }: TodoCardProps) => {
  return (
    <div className={[styles.card, todo.completed ? styles.cardCompleted : ''].filter(Boolean).join(' ')}>
      <h3 className={[styles.title, todo.completed ? styles.titleCompleted : ''].filter(Boolean).join(' ')}>
        {todo.title}
      </h3>
      {todo.description && <p className={styles.description}>{todo.description}</p>}
    </div>
  );
};

export default TodoCard;
