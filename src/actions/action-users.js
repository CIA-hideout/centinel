import * as types from '../constants/action-types';

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
