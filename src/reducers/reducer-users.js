import * as types from '../constants/action-types';
import { combineReducers } from 'redux';
import array from 'lodash/array';

// type checking
const validateCreateUser = (data) => (
  data.hasOwnProperty('name') &&
    data.hasOwnProperty('budget') &&
    data.hasOwnProperty('salary')
);

const validateEditUser = (data) => (
  data.hasOwnProperty('name') ||
    data.hasOwnProperty('budget') ||
    data.hasOwnProperty('salary')
);

const checkUserExists = (userId, state) => (
  state.find(user => user.id === userId)
);

const users = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_USER:
      if (validateCreateUser(action.data)) {
        const copiedState = state.slice(0);
        const newUser = {
          id: copiedState.length === 0 ? 0 : array.last(copiedState).id + 1,
          ...action.data,
        };

        copiedState.push(newUser);

        return copiedState;
      }

      return state;

    case types.EDIT_USER:
      let editedUser = checkUserExists(action.userId, state);

      if (validateEditUser(action.data) && editedUser) {
        const copiedState = state.slice(0);
        copiedState.splice(copiedState.indexOf(editedUser), 1);

        editedUser = {
          ...editedUser,
          ...action.data,
        };

        copiedState.push(editedUser);

        return copiedState;
      }

      return state;

    case types.DELETE_USER:
      const deletedUser = checkUserExists(action.userId, state);

      if (deletedUser) {
        const copiedState = state.slice(0);
        copiedState.splice(copiedState.indexOf(deletedUser), 1);
        return copiedState;
      }

      return state;

    default:
      return state;
  }
};

export default users;