import { apiCall } from './api';

const url = '/comments';

export const fetchComments = () => {
  return apiCall({
    method: 'get',
    url
  });
};

export const deleteComment = (id) => {
  return apiCall({
    method: 'delete',
    url: `${url}/${id}`
  });
};
