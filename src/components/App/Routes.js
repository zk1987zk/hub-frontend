import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Landing/Home';
import About from '../Landing/About';
import What from '../Landing/What';
import Register from '../Landing/Register';
import Login from '../Landing/Login';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/what" component={What} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
  </Switch>
);