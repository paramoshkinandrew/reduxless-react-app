import * as React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { TodoItemsProvider } from './hooks/useTodoItems';
import { NewTodoItemForm } from './NewTodoItemForm';
import { TodoItems } from './TodoItems';
import './App.css';

const { Content, Sider } = Layout;

const App = React.memo(() => (
  <TodoItemsProvider>
    <Layout className="layout" style={{ height: "100vh" }} tagName="main">
      <Layout tagName="section">
        <Sider width={300} style={{ background: '#fff', padding: '24px' }}>
          <NewTodoItemForm />
        </Sider>
        <Layout style={{ padding: '24px' }} tagName="section">
          <Content tagName="main">
            <TodoItems />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </TodoItemsProvider>
));

export default App;
