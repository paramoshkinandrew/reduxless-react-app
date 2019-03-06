export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';

export const addTodoItem = (todoItem) => ({
  type: ADD_TODO_ITEM,
  payload: todoItem
});
