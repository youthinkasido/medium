import { combineReducers } from "redux";
import stories from "./stories_reducer";
import followsReducer from "./follows_reducer";
import session_reducer from "./session_reducer";

const entitiesReducer = combineReducers({
  session: session_reducer,
  follows: followsReducer,
  stories
});

export default entitiesReducer;
