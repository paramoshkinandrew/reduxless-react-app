import React, { Component } from 'react';
import { Layout } from 'antd';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './App.css';
import { reducers } from './reducers';
import { NewTodoItemForm } from './NewTodoItemForm';
import { TodoItems } from './TodoItems';

const { Content, Sider } = Layout;

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
