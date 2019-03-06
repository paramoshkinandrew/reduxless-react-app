import { ADD_TODO_ITEM } from '../NewTodoItemForm';
import { SET_TODO_ITEM_DONE, DELETE_TODO_ITEM } from './todoItemsActions';

export const todoItemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO_ITEM:
      return [...state, payload];
    case SET_TODO_ITEM_DONE:
      return state.map((todoItem) => {
        if (todoItem.id === payload.id) {
          return { ...todoItem, done: payload.done };
        }
        return todoItem;
      });
    case DELETE_TODO_ITEM: {
      return state.filter((todoItem) => todoItem.id !== payload);
    }
    default:
      return state;
  }
};
