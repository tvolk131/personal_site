import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { Router, Route, browserHistory, Switch } from 'react-router';

import Navbar from './Navbar.jsx';
import Home from './pages/Home.jsx';

render(
  <BrowserRouter basename='/'>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);