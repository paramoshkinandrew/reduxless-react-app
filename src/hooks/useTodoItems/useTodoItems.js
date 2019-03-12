import { useContext } from 'react';
import {
  TodoItemsDispatchContext,
  TodoItemsStateContext
} from './TodoItemsProvider';

export const useTodoItems = () => {
  const state = useContext(TodoItemsStateContext);
  const dispatch = useContext(TodoItemsDispatchContext);
  return [state, dispatch];
};
