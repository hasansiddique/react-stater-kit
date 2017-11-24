export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const GET_DATA_FROM_SERVER = 'GET_DATA_FROM_SERVER';
export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST';

export const incrementCounter = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_COUNTER
    });
  };
};

export const getData = () => {
  return dispatch => {
    dispatch({
      type: GET_DATA_FROM_SERVER,
      isFetching: true
    });
  };
};

export const updateUserList = (users) => {
  return dispatch => {
    dispatch({
      type: UPDATE_USERS_LIST,
      users: users,
      isFetching: false
    });
  };
};
