import type { Todo } from '../types/todo';
import { getApiClient } from './api';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await getApiClient().get<Todo[]>('/todos');
  return response.data;
};
