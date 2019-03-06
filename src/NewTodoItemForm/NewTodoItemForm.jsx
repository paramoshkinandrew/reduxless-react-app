import * as React from 'react';
import { connect } from 'react-redux';
import {
  Form, Input, Button,
} from 'antd';
import { addTodoItem } from "./newTodoItemFormActions";
import { getNumber } from "../utils/getNumber";

class NewTodoItemFormComponent extends React.PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();

    const { addTodoItem: addTodoItemAction, form: { getFieldValue, resetFields } } = this.props;
    const text = getFieldValue('text') || '';

    if (text.trim().length !== 0) {
      addTodoItemAction({ id: getNumber(), text, done: false });
      resetFields(['text']);
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator('text')(<Input placeholder="Todo" />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export const NewTodoItemForm = connect(null, { addTodoItem })(
  Form.create({ name: 'newTodoItem' })(NewTodoItemFormComponent)
);
