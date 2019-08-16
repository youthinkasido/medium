import { combineReducers } from "redux";

import stories from "./stories_reducer";
import follows from "./follows_reducer";
import likes from './likes_reducer';
import session from "./session_reducer";
import users from "./user_reducer";
import comments from "./comments_reducer";

const entitiesReducer = combineReducers({
  session,
  follows,
  stories,
  users,
  comments,
  likes,
});

export default entitiesReducer;
