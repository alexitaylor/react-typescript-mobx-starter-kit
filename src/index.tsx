import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import App from './App';
import ServiceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import TodoModel from './models/TodoModel';
import { createStores } from './stores';

// default fixtures for TodoStore
const defaultTodos = [
  new TodoModel('Use Mobx'),
  new TodoModel('Use React', true)
];

// prepare MobX stores
const rootStore = createStores(defaultTodos);

ReactDOM.render(
  <Provider {...rootStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ServiceWorker.register();
