import * as React from 'react';
import {
  Form, Input, Button,
} from 'antd';
import { getNumber } from '../utils/getNumber';
import { useTodoItems, addTodoItem } from '../hooks/useTodoItems';

const NewTodoItemFormComponent = React.memo((
  { form: { getFieldValue, resetFields, getFieldDecorator } }
) => {
  const [, dispatch] = useTodoItems();

  const handleSubmit = React.useCallback((e) => {
    e.preventDefault();

    const text = getFieldValue('text') || '';
    if (text.trim().length !== 0) {
      dispatch(addTodoItem({ id: getNumber(), text, done: false }));
      resetFields(['text']);
    }
  }, [getFieldValue, resetFields, dispatch]);

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator('text')(<Input placeholder='Todo' />)}
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Add
        </Button>
      </Form.Item>
    </Form>
  )
});

export const NewTodoItemForm = Form.create({ name: 'newTodoItem' })(NewTodoItemFormComponent);
