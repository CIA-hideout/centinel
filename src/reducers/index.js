import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import quotes from './reducer-quotes';
import users from './reducer-users';
import expenses from './reducer-expenses';

const rootReducer = combineReducers({
  quotes,
  users,
  expenses,
  routing: routerReducer,
});

export default rootReducer;
