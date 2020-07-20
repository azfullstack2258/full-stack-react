import { createAction } from 'redux-actions';
import { commentActionTypes as actionTypes } from '../constants/actionTypes';

export const  loadComments = createAction(actionTypes.loadCommentsRequest);
