import { useEffect, useState } from 'react';
import type { Todo } from '../../types/todo';
import { getTodos } from '../../services/todoService';
import TodoCard from '../../components/TodoCard/TodoCard';
import styles from './Home.module.css';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Mis Tareas</h1>
      </header>

      {todos.length === 0 ? (
        <p className={styles.emptyState}>No hay tareas</p>
      ) : (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoCard todo={todo} />
            </li>
          ))}
        </ul>
      )}

      <button className={styles.fab} aria-label="Nueva tarea">
        +
      </button>
    </div>
  );
};

export default Home;
