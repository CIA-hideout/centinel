import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers/';

const loggerMiddleware = createLogger();
const reactRouterRedux = routerMiddleware(browserHistory);

const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        reactRouterRedux,
        thunkMiddleware,
        loggerMiddleware
      ),
      autoRehydrate(),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

persistStore(store);
export default store;
