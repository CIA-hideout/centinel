import * as types from '../constants/action-types';

/**
 * 
 * @param data {Object} name, budget, salary
 */

export const createUser = (data) => ({
  type: types.CREATE_USER,
  data,
});

export const editUser = () => ({
  type: types.EDIT_USER,
});

export const deleteUser = () => ({
  type: types.DELETE_USER,
});
