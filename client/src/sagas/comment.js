import { call, put, takeLatest } from 'redux-saga/effects';
import { commentActionTypes as actionTypes } from '../constants/actionTypes';
import { fetchComments } from '../service/comment';

function* fetchCommentsSaga() {
  yield put({ type: actionTypes.setLoadingStatus, payload: true });

  const res = yield call(fetchComments);

  if (res && res.status === 200) {
    const { data } = res;
    yield put({
      type: actionTypes.loadCommentsSucceed,
      payload: data,
    });
  } else {
    yield put({ type: actionTypes.loadCommentsFail });
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false });
}

export function* watchComments() {
  yield takeLatest(actionTypes.loadCommentsRequest, fetchCommentsSaga);
}
