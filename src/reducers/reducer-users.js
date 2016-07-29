import * as types from '../constants/action-types';
import { combineReducers } from 'redux';
import array from 'lodash/array';

// type checking
const validateUser = (data) => (
  data.hasOwnProperty('name') &&
  data.hasOwnProperty('budget') &&
  data.hasOwnProperty('salary')
);

const users = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_USER:
      if (validateUser(action.data)) {
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
      
      return state;
      

    default:
      return state;
  }
};

export default users;