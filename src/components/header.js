import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import SVGInline from 'react-svg-inline';

import logoSVG from '../images/full-logo-horizontal.svg';

import '../stylesheets/header.scss';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-width">
        <Link to="/home">
          <SVGInline svg={logoSVG.toString()} className="header-logo" />
        </Link>
        <div className="header-user">
          <p>{props.user.name}</p>
          <div className="fake-user-pic"></div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Header;
