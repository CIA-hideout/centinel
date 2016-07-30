import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/action-users';

import Template from '../containers/template';
import Textbox from '../components/textbox';
import Button from '../components/button';

import '../stylesheets/signup.scss';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      reEnteredPw: '',
      error: '',
    };

    this.validate = this.validate.bind(this);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  onSignupSubmit() {
    if (this.validate()) {
      const data = {
        name: this.state.name,
        password: this.state.password,
      };

      this.props.signupUser(data);
    }
  }

  validate() {
    let checker = false;
    let error = 'Passwords do not match';

    if (this.state.password === this.state.reEnteredPw && this.state.password !== '') {
      checker = true;
      error = '';
    }

    this.setState({ error });
    return checker;
  }

  render() {
    return (
      <Template>
        <div className="signup-container container">
          <h1>Centinel Signup</h1>
          <div className="signup-form">
            <h3>Enter your details</h3>
            <Textbox
              type="text"
              className="signup-textbox"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <Textbox
              type="password"
              className="signup-textbox"
              placeholder="Password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <Textbox
              type="password"
              className="signup-textbox"
              placeholder="Re-enter Password"
              value={this.state.reEnteredPw}
              onChange={(e) => this.setState({ reEnteredPw: e.target.value })}
            />
            <Button
              type="submit"
              className="signup-submit-btn button-blue"
              text="Sign me up!"
              onClick={this.onSignupSubmit}
            />

            <div className="error-msg">
              {this.state.error ? this.state.error : ''}
            </div>
          </div>
        </div>
      </Template>
    );
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
};

export default connect(null, { signupUser })(Signup);
