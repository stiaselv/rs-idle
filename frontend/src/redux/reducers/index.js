import loggedInReducer from "./isLoggedIn";
import itemGainReducer from "./itemGain";
import itemListReducer from './itemList';

import { combineReducers } from "redux";
import inventoryReducer from "./inventory";
import skillsReducer from "./skills";
import experienceGainReducer from "./experienceGain";

const allReducer = combineReducers({
  isLoggedIn : loggedInReducer,
  currentItemGain : itemGainReducer,
  itemList : itemListReducer,
  inventory : inventoryReducer,
  skills : skillsReducer,
  experienceGain : experienceGainReducer,
});

export default allReducer;