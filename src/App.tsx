import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Todo } from './Todo/Todo';
import Home from './Home';
import './App.css';

// render react DOM
export const App = () => (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/todo" component={Todo} />
  </Router>
);

export default App;
