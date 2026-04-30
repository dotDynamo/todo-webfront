import { useEffect, useState } from 'react';
import type { Todo } from '../../types/todo';
import { getTodos, getTodoById, createTodo, deleteTodo } from '../../services/todoService';
import TodoCard from '../../components/TodoCard/TodoCard';
import TodoModal from '../../components/TodoModal/TodoModal';
import CreateTodoModal from '../../components/CreateTodoModal/CreateTodoModal';
import styles from './Home.module.css';

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  const handleCardClick = (id: string) => {
    getTodoById(id).then(setSelectedTodo).catch(console.error);
  };

  const handleCreate = async (title: string, description: string) => {
    const newTodo = await createTodo(title, description);
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id)
      .then(() => setTodos((prev) => prev.filter((t) => t.id !== id)))
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
              <TodoCard
                todo={todo}
                onClick={() => handleCardClick(todo.id)}
                onDelete={() => handleDelete(todo.id)}
              />
            </li>
          ))}
        </ul>
      )}

      <button className={styles.fab} aria-label="Nueva tarea" onClick={() => setShowCreateModal(true)}>
        +
      </button>

      {selectedTodo && (
        <TodoModal todo={selectedTodo} onClose={() => setSelectedTodo(null)} />
      )}

      {showCreateModal && (
        <CreateTodoModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreate}
        />
      )}
    </div>
  );
};

export default Home;
