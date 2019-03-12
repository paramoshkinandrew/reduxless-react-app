import * as React from 'react';
import { identity } from '../../utils/identity';
import { INITIAL_STATE, todoItemsReducer } from './todoItemsReducer';

export const TodoItemsStateContext = React.createContext(INITIAL_STATE);
export const TodoItemsDispatchContext = React.createContext(identity);

export const TodoItemsProvider  = ({ children }) => {
  const [state, dispatch] = React.useReducer(todoItemsReducer, INITIAL_STATE);

  return (
    <TodoItemsDispatchContext.Provider value={dispatch}>
      <TodoItemsStateContext.Provider value={state}>
        {children}
      </TodoItemsStateContext.Provider>
    </TodoItemsDispatchContext.Provider>
  );
};
