import type { Todo } from '../types/todo';
import api from './api';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await api.get<Todo[]>('/todos');
  return response.data;
};

export const getTodoById = async (id: string): Promise<Todo> => {
  const response = await api.get<Todo>(`/todos/${id}`);
  return response.data;
};

export const createTodo = async (title: string, description: string): Promise<Todo> => {
  const response = await api.post<Todo>('/todos', { title, description });
  return response.data;
};
