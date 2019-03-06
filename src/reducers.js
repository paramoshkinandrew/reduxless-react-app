import { combineReducers } from 'redux';
import { todoItemsReducer } from "./TodoItems";

export const reducers = combineReducers({
  todoItems: todoItemsReducer
});
