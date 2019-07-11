import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Todo } from './Todo/Todo';
import Home from './Home';
import Header from './components/Header/Header';

import './App.css';

// render react DOM
export const App = () => (
  <Router>
    <Header/>

    <Route exact path="/" component={Home} />
    <Route path="/todo" component={Todo} />
  </Router>
);

export default App;
