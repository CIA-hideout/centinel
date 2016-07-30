import React, { PropTypes } from 'react';

import '../stylesheets/progress-bar.scss';

const ProgressBar = (props) => {
  const { completed } = props;

  const style = {
    width: `${completed}%`,
  };

  return (
    <div className={`progress-bar-container ${props.className}`}>
      <div className="progress-bar-progress" style={style}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default ProgressBar;
