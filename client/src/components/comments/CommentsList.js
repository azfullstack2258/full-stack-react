import React, { memo } from 'react';

const CommentsList = ({ comments }) => (
  <div className="comments-box">
    {comments.map(({ id, email }) => <div key={id} className="comment-item">{`${id}: ${email}`}</div>)}
  </div>
);

export default memo(CommentsList);
