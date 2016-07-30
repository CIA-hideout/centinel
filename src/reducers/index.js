import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import quotes from './reducer-quotes';
import users from './reducer-users';
import expenses from './reducer-expenses';
import selectedUser from './reducer-selected-user';

import { REHYDRATE } from 'redux-persist/constants';
import { REHYDRATION_COMPLETED } from '../constants/action-types';

const persistence = (state = false, action) => {
  switch (action.type) {
    case REHYDRATE:
      return false;

    case REHYDRATION_COMPLETED:
      return true;

    default:
      return state;
  }
};


const rootReducer = combineReducers({
  quotes,
  users,
  expenses,
  selectedUser,
  persistence,
  routing: routerReducer,
});

export default rootReducer;

export const getRehydrationStatus = (state) => state.persistence;
