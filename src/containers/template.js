import React, { Component, PropTypes } from 'react';
import Header from '../components/header';

import '../stylesheets/template.scss';

const user = {
  id: 1,
  name: 'Emma Watson',
};

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="template">
        <Header user={user} />
        <div className="template-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Template;
