import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getSelectedUser } from '../reducers/reducer-selected-user';
import { getRehydrationStatus } from '../reducers/';
import { getExpenses, getTotalCostForExpenses } from '../reducers/reducer-expenses';

import Template from './template';
import TheBotMother from './the-botmother';
import Button from '../components/button';
import ProgressBar from '../components/progress-bar';

import '../stylesheets/home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      percentageOfBudgetSpent: 0,
      rehydrated: false,
    };

    this.renderButtons = this.renderButtons.bind(this);
    this.renderDailyStats = this.renderDailyStats.bind(this);
    this.initHome = this.initHome.bind(this);
  }

  componentWillMount() {
    if (this.props.rehydrated) {
      this.initHome();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rehydrated && !this.state.rehydrated) {
      this.initHome();
    }
  }

  initHome() {
    this.budget = parseInt(this.props.user.dailyBudget, 10);
    this.budgetSpent = parseInt(this.props.totalSpentToday, 10);
    const percentageOfBudgetSpent = this.budgetSpent / this.budget * 100;

    this.setState({
      date: new Date(),
      percentageOfBudgetSpent,
      rehydrated: true,
    });
  }

  parseFloat(num, decimalPlaces) {
    return parseFloat(Math.round(num * 100) / 100).toFixed(decimalPlaces);
  }

  renderButtons() {
    return (
      <div className="home-buttons-bar">
        <Button
          type="button"
          text="Today"
          className="button-grey button-left"
        />
        <Button
          type="button"
          text="This Week"
          className="button-grey button-middle"
        />
        <Button
          type="button"
          text="This Month"
          className="button-grey button-right"
        />
        <Button
          dest="/add-expenditure"
          image="plus-white"
          type="button"
          text="Record Expenditure"
          className="button-pink button-record"
        />
      </div>
    );
  }

  renderDailyExpenses() {
    const { expenses } = this.props;
    const sortedExpenses = expenses.slice(0);
    sortedExpenses.sort((curr, prev) => prev.cost - curr.cost);

    return sortedExpenses.map((expense, index) => (
      <div key={index}>
        <span className="expense-item expense-rank">{index + 1}</span>
        <span className="expense-item expense-name">{expense.name}</span>
        <span className="expense-item expense-cost">${expense.cost}</span>
      </div>
    ));
  }

  renderDailyStats() {
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const { date, percentageOfBudgetSpent } = this.state;
    const amountLeft = this.budget - this.budgetSpent;

    if (!this.state.rehydrated) {
      return null;
    }

    return (
      <div className="home-daily-stats container">
        <h1 className="home-daily-stats-heading">Today</h1>
        <div className="home-date">
          <span className="home-day">{date.getDate()}</span>
          <span className="home-month">{monthNames[date.getMonth()]}</span>
        </div>
        <hr />
        <ProgressBar completed={percentageOfBudgetSpent} className="home-progress-bar" />
        <div>
          <span className="home-daily-amount home-amount-spent">
            ${this.parseFloat(this.budgetSpent, 2)}
          </span>
          <span className="home-daily-amount home-amount-left">
            ${this.parseFloat(amountLeft, 2)}
          </span>
        </div>
        <div>
          <span className="home-daily-info">AMOUNT SPENT</span>
          <span className="home-daily-info home-daily-info-right">AMOUNT LEFT</span>
        </div>
        <hr />
        <h3 className="expenses-heading">Today's Expenses</h3>
        <div className="expenses-list">
          {this.renderDailyExpenses()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <Template>
        <div className="home">
          {this.renderButtons()}
          {this.renderDailyStats()}
          <TheBotMother quoteType="duringOverview" price="" percent="" />
        </div>
      </Template>
    );
  }
}

Home.propTypes = {
  rehydrated: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  expenses: PropTypes.array.isRequired,
  totalSpentToday: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  user: getSelectedUser(state),
  rehydrated: getRehydrationStatus(state),
  expenses: getExpenses(state),
  totalSpentToday: getTotalCostForExpenses(state),
});

export default connect(mapStateToProps)(Home);
