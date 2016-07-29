/**
 * Created by Ivan on 7/30/16.
 */
import * as types from '../constants/action-types';
import array from 'lodash/array';

// type checking
const validateCreateExpense = (data) => (
  data.hasOwnProperty('name') &&
    data.hasOwnProperty('cost') &&
    data.hasOwnProperty('type')
);

const validateEditExpense = (data) => (
  data.hasOwnProperty('name') ||
    data.hasOwnProperty('cost') ||
    data.hasOwnProperty('type')
);

const checkExpenseExists = (expenseId, state) => (
  state.find(expense => expense.id === expenseId)
);

const expenses = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_EXPENSE:
      if (validateCreateExpense(action.data)) {
        const copiedState = state.slice(0);
        const newExpense = {
          id: copiedState.length === 0 ? 0 : array.last(copiedState).id + 1,
          ...action.data,
        };

        copiedState.push(newExpense);

        return copiedState;
      }

      return state;

    case types.EDIT_EXPENSE:
      let editedExpense = checkExpenseExists(action.expenseId, state);

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
      const deletedExpense = checkExpenseExists(action.expenseId, state);

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
