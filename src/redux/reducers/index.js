import { combineReducers } from "redux";
import authReducers from "./authReducers";
import mainReducers from './mainReducer'

const reducers = combineReducers({
  authState: authReducers,
  mainState: mainReducers,
});

export default reducers;
