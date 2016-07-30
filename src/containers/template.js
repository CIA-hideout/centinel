import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getSelectedUser } from '../reducers/reducer-selected-user';

import Header from '../components/header';

import '../stylesheets/template.scss';

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="template">
        <Header user={this.props.user} />
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

const mapStateToProps = (state) => ({
  user: getSelectedUser(state),
});

export default connect(mapStateToProps)(Template);
