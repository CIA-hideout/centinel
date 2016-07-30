import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';

import botSVG from '../images/logo.svg';

import '../stylesheets/the-botmother.scss';

class TheBotMother extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="the-botmother">
        <div className="the-botmother-chat-bubble">{this.props.quote}</div>
        <div className="arrow-right"></div>
        <SVGInline svg={botSVG.toString()} className="the-botmother-svg" />
      </div>
    );
  }
}

TheBotMother.propTypes = {
  quote: PropTypes.string,
};

export default TheBotMother;
