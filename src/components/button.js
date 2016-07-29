import React, { PropTypes } from 'react';

import '../stylesheets/button.scss';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
