import * as types from '../constants/action-types';
import { combineReducers } from 'redux';

import addAnItemQuotes from '../data/addAnItem.json';
import duringOverviewQuotes from '../data/duringOverview.json';
import userEntersApplication from '../data/userEntersApplication.json';

const getRandomQuote = (state, key) => {
  let quotesPool = state.quotes[key];

  if (quotesPool.length === 0) {
    return '';
  }

  if (key === 'duringOverview') {
    quotesPool = quotesPool.positive.concat(quotesPool.negative);
  }

  return quotesPool[Math.floor(Math.random() * quotesPool.length)];
};

const getOverviewQuote = (state, sentimental) => {
  let quotePool = state.quotes.duringOverview[sentimental.type];
  let chosenQuote = quotePool[Math.floor(Math.random() * quotePool.length)];

  // Substitute back the values
  const percentSubStr = '${percent}';
  const priceSubStr = '${price}';
  const percentExistence = chosenQuote.indexOf(percentSubStr);
  const priceExistence = chosenQuote.indexOf(priceSubStr);

  if (priceExistence !== -1) {
    chosenQuote = chosenQuote.replace(priceSubStr, `$${sentimental.spent}`);
  }

  if (percentExistence !== -1) {
    chosenQuote = chosenQuote.replace(percentSubStr, `${sentimental.percentage}%`);
  }

  return chosenQuote;
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

export const getDuringOverviewQuote = (state, sentimental) => {
  if (sentimental === undefined) {
    return getRandomQuote(state, 'duringOverview');
  }

  if (state.quotes.addAnItem.length > 0) {
    return getOverviewQuote(state, sentimental);
  }

  return '';
};

export const getUserEntersAppQuote = (state) => getRandomQuote(state, 'userEntersApp');
