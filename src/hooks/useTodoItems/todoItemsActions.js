export const SET_TODO_ITEM_DONE = 'SET_TODO_ITEM_DONE';
export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';

export const addTodoItem = (todoItem) => ({
  type: ADD_TODO_ITEM,
  payload: todoItem
});

export const setTodoItemDone = (id, done) => ({
  type: SET_TODO_ITEM_DONE,
  payload: { id, done }
});

export const deleteTodoItem = (id) => ({
  type: DELETE_TODO_ITEM,
  payload: id
});
