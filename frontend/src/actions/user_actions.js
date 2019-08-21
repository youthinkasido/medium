import * as APIUtil from "../util/user_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER_INFO = "RECEIVE_CURRENT_USER_INFO";
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

const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER_INFO,
    currentUser
  };
};

export const fetchAllUsers = () => dispatch => {
  return APIUtil.fetchAllUsers().then(users => dispatch(receiveUsers(users)));
};

export const fetchUser = id => dispatch => {
  return APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));
};

export const createUserAvatar = user => dispatch => {
  return APIUtil.createUserAvatar(user).then(avatarURL =>
    dispatch(receiveNewAvatarImageURL(avatarURL))
  );
};

export const updateUser = user => dispatch => {
  return APIUtil.updateUser(user).then(user => 
    dispatch(receiveUser(user))
  );
};

export const fetchCurrentUser = id => dispatch => {
  return APIUtil.fetchCurrentUser(id).then(user => dispatch(receiveCurrentUser(user)));
};