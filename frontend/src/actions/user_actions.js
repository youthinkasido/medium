import * as APIUtil from "../util/user_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_AVATAR = "RECEIVE_USER_AVATAR";

export const receiveNewAvatarImageURL = avatarURL => {
  return {
    type: RECEIVE_USER_AVATAR,
    avatarURL
  };
};

const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
};



/////

export const createUserAvatar = user => dispatch => {
  debugger
  return APIUtil.createUserAvatar(user).then(avatarURL =>
    dispatch(receiveNewAvatarImageURL(avatarURL))
  );
};
