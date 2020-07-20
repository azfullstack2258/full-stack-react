import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadComments } from '../../actions/comment';
import { makeSelectComments, makeSelectCommentsLoading } from '../../selectors/comment';
import CommentsList from '../../components/comments/CommentsList';
import IconBox from '../../components/comments/IconBox';
import { Button, Input } from '../../components/_shared';

const CommentsPage = () => {
  const dispatch = useDispatch();
  const comments = useSelector(makeSelectComments);
  const isLoadingComments = useSelector(makeSelectCommentsLoading);
  const [curId, setCurId] = useState(0);

  useEffect(() => {
    dispatch(loadComments());
  }, []);

  const handleLoadComments = () => {
    dispatch(loadComments());
  };
  const handleDeleteComment = () => {};
  const handleIdChange = (id) => {};

  return (
    <div className="d-flex flex-direction-column align-items-center">
      <IconBox />
      <CommentsList comments={comments} />
      <div className="comments-page__actions">
        <Button onClick={handleLoadComments}>Pull Data</Button>
        <div className="input-group">
          <Input value={curId} onChange={handleIdChange} />
          <Button onClick={handleDeleteComment}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;
