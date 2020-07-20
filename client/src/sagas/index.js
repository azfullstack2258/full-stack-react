import { all } from 'redux-saga/effects';
import { watchComments } from './comment';

export default function* rootSaga() {
  yield all([
    watchComments()
  ]);
}
