import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';
import Template from './template';
import Button from '../components/button';
import Textbox from '../components/textbox';

import logoSVG from '../images/full-logo.svg';

import '../stylesheets/onboard.scss';

class Onboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onboardStage: 1,
      expenditures: [
        {
          item: '',
          cost: '',
        },
      ],
      estimatedDailyBudget: '200.00',
    };

    this.onStartClick = this.onStartClick.bind(this);
    this.incrementStage = this.incrementStage.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.addExpenditure = this.addExpenditure.bind(this);
    this.updateExpenditure = this.updateExpenditure.bind(this);
    this.renderExpenditures = this.renderExpenditures.bind(this);
    this.renderStage1 = this.renderStage1.bind(this);
    this.renderStage2 = this.renderStage2.bind(this);
    this.renderStage3 = this.renderStage3.bind(this);
    this.renderStage4 = this.renderStage4.bind(this);
    this.renderStage = this.renderStage.bind(this);
  }

  onStartClick() {
    console.log('start');
  }

  incrementStage() {
    this.setState({ onboardStage: ++this.state.onboardStage });
  }

  handleBudgetChange(event) {
    this.setState({ estimatedDailyBudget: event.target.value });
  }

  addExpenditure() {
    const { expenditures } = this.state;
    expenditures.push({
      item: '',
      cost: '',
    });

    this.setState({ expenditures });
  }

  updateExpenditure(event, index, key) {
    const { expenditures } = this.state;
    expenditures[index][key] = event.target.value;

    this.setState({ expenditures });
  }

  renderExpenditures() {
    const { expenditures } = this.state;

    return expenditures.map((expenditure, index) => (
      <div className="onboard-expenditure" key={index}>
        <Textbox
          type="text"
          className="onboard-item-textbox"
          placeholder="Default Expenditure"
          value={expenditure.item}
          onChange={(event) => this.updateExpenditure(event, index, 'item')}
        />
        <Textbox
          type="text"
          className="onboard-item-cost"
          placeholder="$"
          value={expenditure.cost}
          onChange={(event) => this.updateExpenditure(event, index, 'cost')}
        />
      </div>
    ));
  }

  renderStage1() {
    return (
      <div className="onboard-welcome onboard-container container center">
        <div className="onboard-welcome-inner center">
          <SVGInline
            svg={logoSVG.toString()}
            className="onboard-welcome-logo"
          />
          <h1>Welcome to Centinel!</h1>
          <Button
            image="arrow"
            type="button"
            text="Get Started"
            className="button-blue"
            onClick={this.incrementStage}
          />
        </div>
      </div>
    );
  }

  renderStage2() {
    return (
      <div className="onboard-container container">
        <h1>Getting Started</h1>
        <div className="onboard-form">
          <h3>What&#39;s your monthly income?</h3>
          <p>Don&#39;t worry about CPF or income tax, we got that covered.</p>
          <Textbox
            type="text"
            className="onboard-textbox"
            placeholder="Monthly Income"
          />
          <h3>Do you have any monthly default expenditures?</h3>
          <p>e.g. Utility bills, Insurance, Subscriptions</p>
          {this.renderExpenditures()}
          <Button
            image="plus"
            type="button"
            text="Add More"
            className="button-blue-dark-dotted onboard-add-button"
            onClick={this.addExpenditure}
          />
        </div>
        <Button
          image="arrow"
          type="button"
          text="Continue"
          className="button-blue"
          onClick={this.incrementStage}
        />
      </div>
    );
  }

  renderStage3() {
    return (
      <div className="onboard-container container">
        <h1>Goal Setting</h1>
        <div className="onboard-form">
          <h3>What&#39;s your daily budget?</h3>
          <p>We&#39;ve calculated an estimate for you. Feel free to tweak it!</p>
          <Textbox
            key="stage3"
            type="text"
            className="onboard-textbox"
            value={this.state.estimatedDailyBudget}
            onChange={this.handleBudgetChange}
          />
        </div>
        <Button
          image="arrow"
          type="button"
          text="Continue"
          className="button-blue"
          onClick={this.incrementStage}
        />
      </div>
    );
  }

  renderStage4() {
    return (
      <div className="onboard-container container">
        <h1>Milestones</h1>
        <div className="onboard-form">
          <h3>Is there anything you&#39;re saving up for?</h3>
          <p>For example, a new bag, a new phone or even a new car!</p>
          <Textbox
            type="text"
            className="onboard-item-textbox"
            placeholder="The thing"
          />
          <Textbox
            type="text"
            className="onboard-item-cost"
            placeholder="$"
          />
          <span className="onboard-optional">Optional</span>
        </div>
        <Button
          dest="/home"
          image="arrow"
          type="button"
          text="Start Saving"
          className="button-blue"
          onClick={this.onStartClick}
        />
      </div>
    );
  }

  renderStage() {
    const { onboardStage } = this.state;

    switch (onboardStage) {
      case 1:
        return this.renderStage1();
      case 2:
        return this.renderStage2();
      case 3:
        return this.renderStage3();
      case 4:
        return this.renderStage4();
      default:
        return null;
    }
  }

  render() {
    return (
      <Template>
        {this.renderStage()}
      </Template>
    );
  }
}

Onboard.propTypes = {

};

export default Onboard;
