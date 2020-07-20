import { handleActions } from 'redux-actions';
import { commentActionTypes as actionTypes } from '../constants/actionTypes';

export const defaultState = {
  comments: [],
  isLoading: false,
};

export default handleActions({
  [actionTypes.loadCommentsSucceed]: (state, { payload }) => ({ ...state, comments: payload }),
  [actionTypes.setLoadingStatus]: (state, { payload }) => ({ ...state, isLoading: payload }),
}, defaultState);
