import { combineReducers } from "redux";
import posts from "./post_reducers";
const rootReducers = combineReducers({
  posts
});

export default rootReducers;
