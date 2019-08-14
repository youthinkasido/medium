import { RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (
  state = { all: [], user: [], new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.all = action.user.data;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
