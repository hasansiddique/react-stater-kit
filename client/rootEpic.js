import {combineEpics} from 'redux-observable';

import {homeEpics} from './home/home.epic';

const epics = combineEpics(
  homeEpics
);

export default epics;
