import React, { PropTypes } from 'react';

import '../stylesheets/textbox.scss';

const Textbox = (props) => {
  return (
    <input
      type={props.type}
      className={`textbox ${props.className}`}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};

Textbox.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default Textbox;
