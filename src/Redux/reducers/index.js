import { combineReducers } from "redux";
import applications from "./applications";
import github from "./github";
import computer from "./computer";
export default combineReducers({
  applications,
  computer,
  github,
});
