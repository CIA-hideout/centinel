import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Login from './containers/login';
import Onboard from './containers/onboard';
import Home from './containers/home';
import AddExpenditure from './containers/add-expenditure';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/welcome" component={Onboard} />
    <Route path="/home" component={Home} />
    <Route path="/add-expenditure" component={AddExpenditure} />
  </Route>
);
