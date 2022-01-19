import { combineReducers } from "redux";

import counter from "./counter";
import number from "./number"

const allReducers = combineReducers({
  counter,
  number,
  // add more reducers here
});

export default allReducers