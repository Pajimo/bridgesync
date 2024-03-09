import { combineReducers } from "@reduxjs/toolkit";
import userDashboardSlice from "../reducers/Dashboard/dashboard";
import userProfileSlice from "../reducers/Profile/userProfile";

const rootReducer = combineReducers({
  userDashboard: userDashboardSlice,
  userProfile: userProfileSlice,
});

export default rootReducer;
