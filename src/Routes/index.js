import React from 'react';

import {
  BrowserRouter as Router,
  Switch
  Route,
  Link,
} from 'react-router-dom';

import Home from './Home';

export default () => {
  <Router>
    <Route path="/" component={Home}/>
  </Router>
}