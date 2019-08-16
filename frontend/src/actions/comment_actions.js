import * as APIUtil from "../util/comments_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const fetchStoryComments = id => dispatch => {
  return APIUtil.fetchStoryComments(id)
    .then(comments => {
      dispatch(receiveComments(comments));
    })
    .catch(err => console.log(err));
};

export const createStoryComment = comment => dispatch => {
  return APIUtil.createStoryComment(comment)
    .then(comment => {
      dispatch(receiveComment(comment));
    })
    .catch(err => console.log(err));
};
