import * as quotesReducer from './reducers/reducer-quotes';
import * as usersActions from './actions/action-users';
import * as expenseActions from './actions/action-expenses';

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

  const changedUser1 = {
    name: 'darius',
  };

  console.log('USERS REDUCER');
  store.dispatch(usersActions.createUser(user1));
  console.log(store.getState().users);
  store.dispatch(usersActions.createUser(user2));
  console.log(store.getState().users);

  store.dispatch(usersActions.editUser(changedUser1, 0));
  console.log(store.getState().users);

  store.dispatch(usersActions.deleteUser(0));
  console.log(store.getState().users);

  const expense1 = {
    name: 'meal at ding tai fung',
    cost: 10,
    type: 'food',
  };

  const changedExpense1 = {
    name: 'party at my house',
    cost: 100,
    type: 'recreation',
  };

  console.log('EXPENSES REDUCER');
  store.dispatch(expenseActions.createExpense(expense1));
  console.log(store.getState().expenses);

  store.dispatch(expenseActions.editExpense(changedExpense1, 0));
  console.log(store.getState().expenses);

  store.dispatch(expenseActions.deleteExpense(0));
  console.log(store.getState().expenses);
};

export default reducerTest;
