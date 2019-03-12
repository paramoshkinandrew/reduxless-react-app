import * as React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import { TodoItemsProvider } from './hooks/useTodoItems';
import { NewTodoItemForm } from './NewTodoItemForm';
import { TodoItems } from './TodoItems';
import './App.css';

const { Content, Sider } = Layout;

const App = () => (
  <TodoItemsProvider>
    <Layout className="layout" tagName="main">
      <Layout tagName="section">
        <Sider className="slider" width={300}>
          <NewTodoItemForm />
        </Sider>
        <Layout className="content-layout" tagName="section">
          <Content tagName="main">
            <TodoItems />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </TodoItemsProvider>
);

export default App;
