import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Todo } from './Todo/Todo';
import Home from './Home';
import './App.css';

// render react DOM
export const App = () => (
  <Router>
    <ul className="flex container mx-auto px-4 py-3">
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800 text-lg" to="/">Home</Link>
      </li>
      <li className="mr-6">
        <Link className="text-blue-500 hover:text-blue-800 text-lg" to="/todo">Todo</Link>
      </li>
    </ul>

    <Route exact path="/" component={Home} />
    <Route path="/todo" component={Todo} />
  </Router>
);

export default App;
