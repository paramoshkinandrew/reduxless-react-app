import * as React from 'react';
import { Checkbox, Button } from 'antd';
import './todoItem.css';

export const TodoItem = React.memo(({ todoItem, onChange, onDelete }) => {
  const onChangeHandler = React.useCallback(() => {
    onChange(todoItem.id, !todoItem.done);
  }, [todoItem, onChange]);

  const onDeleteHandler = React.useCallback(() => {
    onDelete(todoItem.id);
  }, [todoItem, onDelete]);

  return (
    <div className="todo-item">
      <div>
        <Checkbox checked={todoItem.done} onChange={onChangeHandler}>
          {todoItem.text}
        </Checkbox>
      </div>
      <div>
        <Button
          htmlType="button"
          type="dashed"
          shape="circle"
          icon="delete"
          onClick={onDeleteHandler}
        />
      </div>
    </div>
  );
});
