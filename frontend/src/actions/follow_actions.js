import * as APIUtil from "../util/follow_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  };
};

const removeFollow = follow => {
  return {
    type: REMOVE_FOLLOW,
    followId: follow.data._id
  };
};

export const follow = data => dispatch => { 
  return APIUtil.follow(data).then(follow => dispatch(receiveFollow(follow)));
  }

export const unfollow = data => dispatch => {
  return APIUtil.unfollow(data).then(follow => dispatch(removeFollow(follow)));
};
