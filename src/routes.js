import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './containers/login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
  </Route>
);
