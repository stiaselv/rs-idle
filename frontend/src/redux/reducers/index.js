import loggedInReducer from "./isLoggedIn";
import itemGainReducer from "./itemGain";
import itemListReducer from './itemList';

import { combineReducers } from "redux";

const allReducer = combineReducers({
  isLoggedIn : loggedInReducer,
  currentItemGain : itemGainReducer,
  itemList : itemListReducer
});

export default allReducer;