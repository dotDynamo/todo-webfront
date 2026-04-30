import { useEffect, useState } from 'react';
import type { Todo } from '../../types/todo';
import { getTodos, getTodoById } from '../../services/todoService';
import TodoCard from '../../components/TodoCard/TodoCard';
import TodoModal from '../../components/TodoModal/TodoModal';
import styles from './Home.module.css';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  const handleCardClick = (id: string) => {
    getTodoById(id)
      .then(setSelectedTodo)
      .catch(console.error);
  };

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
              <TodoCard todo={todo} onClick={() => handleCardClick(todo.id)} />
            </li>
          ))}
        </ul>
      )}

      <button className={styles.fab} aria-label="Nueva tarea">
        +
      </button>

      {selectedTodo && (
        <TodoModal todo={selectedTodo} onClose={() => setSelectedTodo(null)} />
      )}
    </div>
  );
};

export default Home;
