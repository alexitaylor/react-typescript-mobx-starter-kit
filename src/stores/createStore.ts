import { TodoModel } from '../models';
import { TodoStore } from './TodoStore';
import { STORE_TODO } from '../constants';

export function createStores(defaultTodos: TodoModel[]) {
  const todoStore = new TodoStore(defaultTodos);
  return {
    [STORE_TODO]: todoStore,
  };
}
