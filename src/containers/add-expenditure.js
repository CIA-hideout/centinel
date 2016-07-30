import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Template from './template';
import Button from '../components/button';
import Textbox from '../components/textbox';
import TheBotMother from './the-botmother';

import * as expenseActions from '../actions/action-expenses';
import * as expenseReducer from '../reducers/reducer-expenses';

import '../stylesheets/add-expenditure.scss';

class AddExpenditure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenditures: [
        {
          item: '',
          cost: '',
        },
      ],
    };

    this.addExpenditure = this.addExpenditure.bind(this);
    this.renderExpenditures = this.renderExpenditures.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
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

  onSubmitClick() {
    this.state.expenditures.forEach(expense => {
      this.props.createExpense({
        name: expense.item,
        cost: expense.cost,
      });
    });

    this.props.push('/home');
  }

  renderExpenditures() {
    return this.state.expenditures.map((expenditure, index) => (
      <div className="new-expenditure" key={index}>
        <Textbox
          type="text"
          placeholder="Your Purchase"
          className="expenditure-item-name"
          value={expenditure.item}
          onChange={(event) => this.updateExpenditure(event, index, 'item')}
        />
        <Textbox
          type="text"
          placeholder="$"
          className="expenditure-item-cost"
          value={expenditure.cost}
          onChange={(event) => this.updateExpenditure(event, index, 'cost')}
        />
      </div>
    ));
  }

  render() {
    return (
      <Template>
        <div className="add-expenditure">
          <div className="container">
            <h1>Add Expenditure</h1>
            <div className="expenditure-form">
              <h3>What did you buy?</h3>
              <p>Alright, be honest now</p>
              {this.renderExpenditures()}
              <Button
                image="plus"
                type="button"
                text="Add Another"
                className="button-blue-dark-dashed"
                onClick={this.addExpenditure}
              />
            </div>
            <Button
              image="arrow"
              type="button"
              text="Confirm"
              className="button-pink"
              onClick={this.onSubmitClick}
            />
          </div>
          <TheBotMother />
        </div>
      </Template>
    );
  }
}

AddExpenditure.propTypes = {

};

const mapStateToProps = (state) => ({
  expenses: expenseReducer.getExpenses(state),
});

export default connect(mapStateToProps, { ...expenseActions, push })(AddExpenditure);
