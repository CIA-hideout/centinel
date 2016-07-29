import * as quotesReducer from './reducers/reducer-quotes';

const reducerTest = (store) => {
  console.log('QUOTES REDUCER');
  console.log('getAddAnItemQuote', quotesReducer.getAddAnItemQuote(store.getState()));
  console.log('getDuringOverviewQuote', quotesReducer.getDuringOverviewQuote(store.getState()));
  console.log('getUserEntersAppQuote', quotesReducer.getUserEntersAppQuote(store.getState()));
};

export default reducerTest;
