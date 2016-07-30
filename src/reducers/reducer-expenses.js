/**
 * Created by Ivan on 7/30/16.
 */
import * as types from '../constants/action-types';
import array from 'lodash/array';
import moment from 'moment';

// type checking
const validateCreateExpense = (data) => (
  data.hasOwnProperty('name') &&
    data.hasOwnProperty('cost')
);

const validateEditExpense = (data) => (
  data.hasOwnProperty('name') ||
    data.hasOwnProperty('cost')
);

const retrieveExistingExpense = (expenseId, state) => (
  state.find(expense => expense.id === expenseId)
);

const expenses = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_EXPENSE:
      if (validateCreateExpense(action.data)) {

        const copiedState = state.slice(0);
        const newExpense = {
          id: copiedState.length === 0 ? 0 : array.last(copiedState).id + 1,
          date: {
            year: moment().year(),
            month: moment().month(),
            day: moment().day(),
          },
          ...action.data,
        };

        copiedState.push(newExpense);

        return copiedState;
      }

      return state;

    case types.EDIT_EXPENSE:
      let editedExpense = retrieveExistingExpense(action.expenseId, state);

      if (validateEditExpense(action.data) && editedExpense) {
        const copiedState = state.slice(0);
        copiedState.splice(copiedState.indexOf(editedExpense), 1);

        editedExpense = {
          ...editedExpense,
          ...action.data,
        };

        copiedState.push(editedExpense);

        return copiedState;
      }

      return state;

    case types.DELETE_EXPENSE:
      const deletedExpense = retrieveExistingExpense(action.expenseId, state);

      if (deletedExpense) {
        const copiedState = state.slice(0);
        copiedState.splice(copiedState.indexOf(deletedExpense), 1);
        return copiedState;
      }

      return state;

    default:
      return state;
  }
};

export default expenses;

export const getExpenses = (state) => state.expenses;
export const getTotalCostForExpenses = (state) => {
  let totalCost = 0;

  state.expenses.forEach(expense => {
    // console.log(expense.dateTime);

    if (expense.date.year === moment().year() &&
    expense.date.month === moment().month() &&
    expense.date.day === moment().day()) {
      totalCost += parseInt(expense.cost, 10);
    }
  });

  return totalCost;
};
