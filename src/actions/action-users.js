import * as types from '../constants/action-types';
import { push } from 'react-router-redux';

/**
 * User db
 * @param data {Object} name, budget, salary
 */

export const createUser = (data) => ({
  type: types.CREATE_USER,
  data,
});

export const editUser = (data, userId) => ({
  type: types.EDIT_USER,
  data,
  userId,
});

export const deleteUser = (userId) => ({
  type: types.DELETE_USER,
  userId,
});

export const signupUser = (data) => (dispatch) => {
  dispatch({
    type: types.SIGN_UP_USER,
    data,
  });
  dispatch(push('/home'));
};

export const saveSalary = (data) => ({
  type: types.SAVE_SALARY,
  data,
});

export const saveMonthlyDefaultExpenditures = (data) => ({
  type: types.SAVE_MONTHLY_DEFAULT_EXPENDITURES,
  data,
});

export const saveDailyBudget = (data) => ({
  type: types.SAVE_DAILY_BUDGET,
  data,
});

export const saveMilestone = (data) => ({
  type: types.SAVE_MILESTONE,
  data,
});
