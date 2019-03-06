import * as React from 'react';
import {
  useTodoItems,
  setTodoItemDone,
  deleteTodoItem
} from "../hooks/useTodoItems";
import { TodoItem } from './TodoItem';

export const TodoItems = React.memo(() => {
  const [todoItems, dispatch] = useTodoItems();

  const onChange = React.useCallback((id, done) => {
    dispatch(setTodoItemDone(id, done));
  }, [dispatch]);

  const onDelete = React.useCallback((id) => {
    dispatch(deleteTodoItem(id));
  }, [dispatch]);

  return (
    <div>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          onChange={onChange}
          onDelete={onDelete}
          todoItem={todoItem}
        />
      ))}
    </div>
  );
});
