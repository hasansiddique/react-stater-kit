import {combineReducers} from 'redux';

// reducers
import counter from './home/home.reducer';

const reducers = combineReducers({
  counter
});

export default reducers;
