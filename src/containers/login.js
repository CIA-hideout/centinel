import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import Button from '../components/button';
import Textbox from '../components/textbox';

import logoSVG from '../images/full-logo.svg';

import '../stylesheets/login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login">
        <div className="center">
          <SVGInline svg={logoSVG.toString()} className="logo" />
          <Textbox
            type="text"
            className="textbox-login"
            placeholder="Email"
          />
          <Textbox
            type="password"
            className="textbox-login"
            placeholder="Password"
          />
          <Button
            dest="welcome"
            type="submit"
            text="LOGIN"
            className="button-login"
          />
          <a href="/signup" className="sign-up-link">Sign Up</a>
        </div>
      </div>
    );
  }
}

export default Login;
