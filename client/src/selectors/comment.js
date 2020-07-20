import { createSelector } from 'reselect';
import { initialState } from '../reducers/comment';

/**
 * Direct selector to the comment state domain
 */
const selectCommentsDomain = state => state.comment || initialState;

/**
 * Default selector used by commentDomain
 */
const makeSelectCommentDomain = () =>
  createSelector(
    selectCommentsDomain,
    substate => substate,
  );

const makeSelectComments = () =>
  createSelector(
    selectCommentsDomain,
    substate => substate.comments,
  );

const makeSelectCommentsLoading = () =>
  createSelector(
    selectCommentsDomain,
    substate => substate.isLoading,
  );


export default makeSelectCommentDomain;
export {
  selectCommentsDomain,
  makeSelectComments,
  makeSelectCommentsLoading,
};
