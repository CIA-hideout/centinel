import React, { PropTypes } from 'react';

import '../stylesheets/textbox.scss';

const Textbox = (props) => {
  return (
    <input
      type={props.type}
      className={`textbox ${props.className}`}
      placeholder={props.placeholder}
    />
  );
};

Textbox.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textbox;
