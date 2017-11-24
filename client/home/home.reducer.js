import {
  INCREMENT_COUNTER,
  GET_DATA_FROM_SERVER,
  UPDATE_USERS_LIST
} from './home.action';

const initialState = {
  count: 0,
  isFetching: false,
  users: []
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        count: state.count + 1
      });

    case GET_DATA_FROM_SERVER:
      return Object.assign({}, state, {
        isFetching: action.isFetching
      });

    case UPDATE_USERS_LIST:
      return Object.assign({}, state, {
        users: action.users,
        isFetching: action.isFetching
      });

    default:
      return state;
  }
};

export default counter;
