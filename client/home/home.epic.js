import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import {combineEpics} from 'redux-observable';

import {getUsingAjax} from '../common/api';
import transformKeys from '../common/transformKeys';
import {
  GET_DATA_FROM_SERVER,
  updateUserList
} from './home.action';

const getUsersData = (action$, state) => {
  return action$
    .ofType(GET_DATA_FROM_SERVER)
    .switchMap(action =>
      getUsingAjax(`/v1/users`)
        .map(res => {
          if (res.status === 200) {
            let data = transformKeys.toCamelCase(res.response);
            return updateUserList(data);
          } else {
            return updateUserList([]);
          }
        })
        .catch(error => {
          return 'Something went wrong while fetching data.';
        })
    );
};

export const homeEpics = combineEpics(
  getUsersData
);
