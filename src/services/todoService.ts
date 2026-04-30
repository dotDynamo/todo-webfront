import type { Todo } from '../types/todo';
import api from './api';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await api.get<Todo[]>('/todos');
  return response.data;
};
