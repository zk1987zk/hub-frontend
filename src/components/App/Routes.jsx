import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Landing/Home';
import Register from '../Landing/Register';
import Login from '../Landing/Login';
import About from '../Landing/About';
import Contact from '../Landing/Contact';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);