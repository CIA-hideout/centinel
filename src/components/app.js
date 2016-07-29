import React, { PropTypes } from 'react';

import '../stylesheets/style.scss';

const App = (props) => (
  <div>{props.children}</div>
);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
