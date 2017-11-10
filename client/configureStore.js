import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import rootEpic from './rootEpic';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);
const loggerMiddleware = createLogger();

const configureStore = (predefinedState) => {
  return createStore(
    rootReducer,
    predefinedState,
    applyMiddleware(
      thunkMiddleware,
      epicMiddleware,
      loggerMiddleware
    )
  );
};

export default configureStore;
