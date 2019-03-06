import * as React from "react";
import {
  TodoItemsDispatchContext,
  TodoItemsStateContext
} from "./TodoItemsProvider";

export const useTodoItems = () => {
  const state = React.useContext(TodoItemsStateContext);
  const dispatch = React.useContext(TodoItemsDispatchContext);
  return [state, dispatch];
};
