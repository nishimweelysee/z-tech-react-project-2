import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import App from './App'
import About from './About'


ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);
