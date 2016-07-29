import React, { Component, PropTypes } from 'react';
import Template from './template';
import ProgressBar from '../components/progress-bar';

import '../stylesheets/home.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      percentageOfBudgetSpent: 0,
    };

    this.renderDailyStats = this.renderDailyStats.bind(this);

    // should be props if possible
    this.budget = 200.00;
    this.budgetSpent = 130.10;
  }

  componentWillMount() {
    // get amount spent
    const percentageOfBudgetSpent = this.budgetSpent / this.budget * 100;
    this.setState({
      date: new Date(),
      percentageOfBudgetSpent,
    });
  }

  parseFloat(num, decimalPlaces) {
    return parseFloat(Math.round(num * 100) / 100).toFixed(decimalPlaces);
  }

  renderDailyStats() {
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const { date, percentageOfBudgetSpent } = this.state;
    const amountLeft = this.budget - this.budgetSpent;

    return (
      <div className="home-daily-stats container">
        <h1>Today's Expenditure</h1>
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
        <div>
          <p>*More data here*</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Template>
        <div className="home">
          {this.renderDailyStats()}
        </div>
      </Template>
    );
  }
}

Home.propTypes = {

};

export default Home;
