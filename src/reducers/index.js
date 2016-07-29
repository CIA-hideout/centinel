import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import quotes from './reducer-quotes';
import users from './reducer-users';

const rootReducer = combineReducers({
  quotes,
  users,
  routing: routerReducer,
});

export default rootReducer;
