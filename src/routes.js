import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import Login from './containers/login';
import Signup from './containers/signup';
import Onboard from './containers/onboard';
import AddExpenditure from './containers/add-expenditure';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/welcome" component={Onboard} />
    <Route path="/home" component={Home} />
    <Route path="/add-expenditure" component={AddExpenditure} />
  </Route>
);
