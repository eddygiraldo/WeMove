import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import LiveMap from '../containers/LiveMap';
import Login from '../containers/Login';
import Register from '../containers/Register';
import RouteWithLayout from '../containers/RouteWithLayout';

const App = () => (
  <BrowserRouter>
    <Switch>
      <RouteWithLayout exact layout={Layout} path='/' component={Home} />
      <RouteWithLayout exact layout={Layout} path='/livemap' component={LiveMap} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
);

export default App;
