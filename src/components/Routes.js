import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from 'components/Main/Main.js';
export default () => (
  <Router>
    <Route exact path="/" component={Main} />
  </Router>
);
