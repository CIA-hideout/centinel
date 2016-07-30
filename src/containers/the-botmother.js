import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';
import { connect } from 'react-redux';
import * as quotesReducer from '../reducers/reducer-quotes';

import botSVG from '../images/logo.svg';

import '../stylesheets/the-botmother.scss';

class TheBotMother extends Component {
  constructor(props) {
    super(props);

    this.renderQuote = this.renderQuote.bind(this);
  }

  renderQuote() {
    return (this.props.quoteType) ? (
      <div className="chat-bubble">
        <div className="chat-bubble-text">{this.props[this.props.quoteType]}</div>
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
  quoteType: PropTypes.string,
};

const mapStateToProps = (state) => ({
  addAnItem: quotesReducer.getAddAnItemQuote(state),
  duringOverview: quotesReducer.getDuringOverviewQuote(state),
  userEntersApp: quotesReducer.getUserEntersAppQuote(state),
});

export default connect(mapStateToProps)(TheBotMother);
