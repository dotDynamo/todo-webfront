import { useState, type SyntheticEvent } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './CreateTodoModal.module.css';

export interface CreateTodoModalProps {
  onClose: () => void;
  onSubmit: (title: string, description: string) => Promise<void>;
}

const CreateTodoModal = ({ onClose, onSubmit }: CreateTodoModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      setError('Completa todos los campos');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await onSubmit(title.trim(), description.trim());
      onClose();
    } catch {
      setError('Ocurrió un error al crear la tarea');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nueva Tarea</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar">
            ✕
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Título"
            type="text"
            placeholder="Nombre de la tarea"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />

          <Input
            label="Descripción"
            type="text"
            placeholder="Detalla la tarea"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />

          {error && <p className={styles.error}>{error}</p>}

          <div className={styles.actions}>
            <Button label="Cancelar" variant="danger" onPress={onClose} />
            <Button
              type="submit"
              label={loading ? 'Creando...' : 'Crear'}
              variant="primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodoModal;
