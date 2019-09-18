import {
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_USER_AVATAR,
  RECEIVE_CURRENT_USER_INFO
} from "../actions/user_actions";
import { merge } from "lodash";

const usersReducer = (
  state = { all: [], currentUser: {}, user: {}, new: undefined, avatarURL: "" },
  action
) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_INFO:
      newState.currentUser = action.currentUser.data;

      return newState;

    case RECEIVE_USERS:
      let newObj = {};

      action.users.data.forEach(user => {
        newObj[user._id] = user;
      });

      newState.all = newObj;
      return newState;
    case RECEIVE_USER:
      newState.avatarURL = action.user.data.avatarURL;
      newState.user = action.user.data;

      return newState;

    case RECEIVE_USER_AVATAR:
      newState.currentUser.avatarURL = action.avatarURL.data.avatarURL;
      newState.user.avatarURL = action.avatarURL.data.avatarURL;

      return newState;

    default:
      return state;
  }
};

export default usersReducer;
