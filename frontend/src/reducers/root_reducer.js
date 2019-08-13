import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
//combines the reducers before creating the store
const RootReducer = combineReducers({
  session,
  errors
});

export default RootReducer;
