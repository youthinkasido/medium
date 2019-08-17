import { RECEIVE_USER, RECEIVE_USERS, RECEIVE_USER_AVATAR } from "../actions/user_actions";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";
import { merge } from 'lodash';

const usersReducer = (
  state = { all: [], user: {}, new: undefined, avatarURL: '' },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      let newObj = {};

      action.users.data.forEach(user => {
        newObj[user._id] = user;
      });

      newState.all = newObj;
      return newState;
    case RECEIVE_USER:
      newState.user = action.user.data;

      return newState;

      case RECEIVE_USER_AVATAR:
        newState.avatarURL = action.avatarURL
        return newState
    default:
      return state;
  }
};

export default usersReducer;
