import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import SVGInline from 'react-svg-inline';

import arrowSVG from '../images/arrow.svg';
import plusSVG from '../images/plus.svg';

import '../stylesheets/button.scss';

const Button = (props) => {
  const renderImage = (location) => {
    let svg = '';
    let className = '';

    switch (props.image) {
      case 'arrow':
        if (location === 'back') {
          svg = arrowSVG.toString();
          className = 'back';
        }
        break;
      case 'plus':
        if (location === 'front') {
          svg = plusSVG.toString();
          className = 'front';
        }
        break;
      default:
        break;
    }

    if (svg !== '') {
      return <SVGInline svg={svg} className={`button-svg button-svg-${className}`} />;
    }

    return null;
  };

  const renderButton = () => (
    <button
      type={props.type}
      className={`button ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {renderImage('front')}
      <span className="button-text">{props.text}</span>
      {renderImage('back')}
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
  image: PropTypes.string,
  dest: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
