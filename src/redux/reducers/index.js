import { combineReducers } from "redux";
import authReducers from "./authReducers";
import mainReducers from './mainReducer'
import chatReducer from './chatReducer'

const reducers = combineReducers({
  authState: authReducers,
  mainState: mainReducers,
  chatState: chatReducer,
});

export default reducers;
