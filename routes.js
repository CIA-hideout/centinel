import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HelloWorld from './containers/hello-world';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HelloWorld} />
  </Route>
);
