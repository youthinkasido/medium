import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import entities from "./entities_reducer";
//combines the reducers before creating the store
const RootReducer = combineReducers({
  entities,
  session,
  errors
});

export default RootReducer;
