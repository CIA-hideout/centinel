import * as types from '../constants/action-types';

/**
 * User db
 * @param data {Object} name, dateTime, cost, type
 */

export const createExpense = (data) => ({
  type: types.CREATE_EXPENSE,
  data,
});

export const editExpense = (data, expenseId) => ({
  type: types.EDIT_EXPENSE,
  data,
  expenseId,
});

export const deleteExpense = (expenseId) => ({
  type: types.DELETE_EXPENSE,
  expenseId,
});
