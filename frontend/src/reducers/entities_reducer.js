import { combineReducers } from "redux";

import stories from "./stories_reducer";
import follows from "./follows_reducer";
import likes from './likes_reducer';
import session from "./session_reducer";
import users from "./user_reducer"

const entitiesReducer = combineReducers({
  session,
  follows,
  stories,
  likes,
  users
});

export default entitiesReducer;
