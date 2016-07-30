import React, { Component, PropTypes } from 'react';
import SVGInline from 'react-svg-inline';
import { connect } from 'react-redux';

import { getSelectedUser } from '../reducers/reducer-selected-user';
import * as userActions from '../actions/action-users';
import { parseFloatToDp } from '../util/helper';
import calcTax from '../util/calc-tax';

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
      monthlyIncome: '',
      estimatedDailyBudget: '',
      milestoneItem: '',
      milestoneCost: '',
    };

    this.calculateDefaultBudget = this.calculateDefaultBudget.bind(this);
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
    // check for milestone and save accordingly
    if (this.state.milestoneItem !== '' && this.state.milestoneCost !== '') {
      this.props.saveMilestone({
        item: this.state.milestoneItem,
        cost: this.state.milestoneCost,
      });
    }

    console.log('start');
  }

  incrementStage() {
    switch(this.state.onboardStage) {
      case 2:
        // Collect monthly income and monthly default expenditures
        this.props.saveSalary(this.state.monthlyIncome);
        this.props.saveMonthlyDefaultExpenditures(this.state.expenditures);
        console.log(calcTax(this.state.monthlyIncome));

        this.calculateDefaultBudget();
        break;

      case 3:
        this.props.saveDailyBudget(this.state.estimatedDailyBudget);
        break;

      default:
        console.log('[The Botmother]: this stage not for submission, twat');
    }

    this.setState({ onboardStage: ++this.state.onboardStage });
  }

  calculateDefaultBudget() {
    let totalExpenditures = 0;
    let estimatedDailyBudget = 0;

    this.state.expenditures.forEach(expense => {
      totalExpenditures += parseInt(expense.cost, 10);
    });

    // estimating that number of days in month is 30
    if (!totalExpenditures) {
      estimatedDailyBudget = parseFloatToDp((this.state.monthlyIncome * 1.0) / 30, 2);
    } else {
      estimatedDailyBudget = parseFloatToDp(((this.state.monthlyIncome * 1.0 -
      totalExpenditures) / 30), 2);
    }

    this.setState({ estimatedDailyBudget });
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
            value={this.state.monthlyIncome}
            onChange={(e) => this.setState({ monthlyIncome: e.target.value })}
          />
          <h3>Do you have any monthly default expenditures?</h3>
          <p>e.g. Utility bills, Insurance, Subscriptions</p>
          {this.renderExpenditures()}
          <Button
            image="plus"
            type="button"
            text="Add More"
            className="button-blue-dark-dashed onboard-add-button"
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
            value={this.state.milestoneItem}
            onChange={(e) => this.setState({ milestoneItem: e.target.value })}
          />
          <Textbox
            type="text"
            className="onboard-item-cost"
            placeholder="$"
            value={this.state.milestoneCost}
            onChange={(e) => this.setState({ milestoneCost: e.target.value })}
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

const mapStateToProps = (state) => ({
  user: getSelectedUser(state),
});

export default connect(mapStateToProps, userActions)(Onboard);
