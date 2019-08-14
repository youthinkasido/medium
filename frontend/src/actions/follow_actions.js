import * as APIUtil from "../util/follow_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => {
  debugger
  return{
    type: RECEIVE_FOLLOW,
    follow
  }
}


const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  followId: follow.id
});

export const follow = follow => dispatch =>
  APIUtil.follow(follow).then(follow => dispatch(receiveFollow(follow)));

  window.follow = follow

export const unfollow = id => dispatch =>
  APIUtil.unfollow(id).then(follow => dispatch(removeFollow(follow)));



