import { combineReducers } from "redux";
import authReducers from "./authReducers";

const reducers = combineReducers({
  authState: authReducers,
});

export default reducers;
