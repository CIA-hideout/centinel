import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import '../stylesheets/button.scss';

const Button = (props) => {
  const renderButton = () => (
    <button
      type={props.type}
      className={`button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );

  return (props.dest) ? (
    <Link to={props.dest}>
      {renderButton()}
    </Link>
  ) : (
    renderButton()
  );
};

Button.propTypes = {
  dest: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
