import { RECEIVE_COMMENTS, RECEIVE_COMMENT } from "../actions/comment_actions";
import merge from "lodash/merge";

const commentsReducer = (
  state = { all: [], user: {}, comment: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      newState.all = action.comments.data;
      return newState;
    case RECEIVE_COMMENT:
      newState.all.push(action.comment.data);
      newState.comment = action.comment.data;
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
