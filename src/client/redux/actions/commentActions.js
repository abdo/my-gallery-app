import * as actionTypes from './actionTypes';
import * as generalActions from './generalActions';
import http, { commentApi } from '../../helpers/httpService';

export const createComment = (commentData, callback) => (dispatch) => {
  http
    .post(`${commentApi}`, commentData)
    .then(() => {
      dispatch(generalActions.setQuickInfo('Comment added successfully'));
      if (callback) callback();
    })
    .catch((err) => {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getOneComment = async (commentId) => {
  const res = await http.get(`${commentApi}/${commentId}`);

  return res.data.comment;
};
