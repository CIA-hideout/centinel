import * as quotesReducer from './reducers/reducer-quotes';
import * as usersActions from './actions/action-users';

const reducerTest = (store) => {
  console.log('QUOTES REDUCER');
  console.log('getAddAnItemQuote', quotesReducer.getAddAnItemQuote(store.getState()));
  console.log('getDuringOverviewQuote', quotesReducer.getDuringOverviewQuote(store.getState()));
  console.log('getUserEntersAppQuote', quotesReducer.getUserEntersAppQuote(store.getState()));

  const user1 = {
    name: 'Janna',
    budget: 500,
    salary: 1000,
  };

  const user2 = {
    name: 'Sona',
    budget: 500,
    salary: 1000,
  };

  console.log('USERS REDUCER');
  store.dispatch(usersActions.createUser(user1));
  console.log(store.getState().users);
  store.dispatch(usersActions.createUser(user2));
  console.log(store.getState().users);
 
};

export default reducerTest;
