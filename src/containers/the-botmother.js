import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';

import botSVG from '../images/logo.svg';

import '../stylesheets/the-botmother.scss';

class TheBotMother extends Component {
  constructor(props) {
    super(props);

    this.renderQuote = this.renderQuote.bind(this);
  }

  renderQuote() {
    return (this.props.quote) ? (
      <div className="chat-bubble">
        <div className="chat-bubble-text">{this.props.quote}</div>
        <div className="chat-bubble-arrow"></div>
      </div>
    ) : null;
  }

  render() {
    return (
      <div className="the-botmother">
        {this.renderQuote()}
        <SVGInline svg={botSVG.toString()} className="the-botmother-svg" />
      </div>
    );
  }
}

TheBotMother.propTypes = {
  quote: PropTypes.string,
};

export default TheBotMother;
