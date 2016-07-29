import * as types from '../constants/action-types';
import { combineReducers } from 'redux';

import addAnItemQuotes from '../data/addAnItem.json';
import duringOverviewQuotes from '../data/duringOverview.json';
import userEntersApplication from '../data/userEntersApplication.json';

const getRandomQuote = (state, key) => {
  let randomQuote = state.quotes[key][Math.floor(Math.random() * state.quotes[key].length)];

  return randomQuote;
};

export const quotes = () => {
  const addAnItem = (state = [], action) => {
    switch (action.type) {
      case types.INIT_APP_STATE:
        return addAnItemQuotes;
      default:
        return state;
    }
  };

  const duringOverview = (state = [], action) => {
    switch (action.type) {
      case types.INIT_APP_STATE:
        return duringOverviewQuotes;
      default:
        return state;
    }
  };

  const userEntersApp = (state = [], action) => {
    switch (action.type) {
      case types.INIT_APP_STATE:
        return userEntersApplication;
      default:
        return state;
    }
  };

  return combineReducers({
    addAnItem,
    duringOverview,
    userEntersApp,
  });
};

export default quotes();

export const getAddAnItemQuote = (state) => getRandomQuote(state, 'addAnItem');
export const getDuringOverviewQuote = (state) => getRandomQuote(state, 'duringOverview');
export const getUserEntersAppQuote = (state) => getRandomQuote(state, 'userEntersApp');
