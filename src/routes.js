import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './containers/login';
import Onboard from './containers/onboard';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/home" component={Onboard} />
  </Route>
);
