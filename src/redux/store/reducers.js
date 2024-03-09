import { combineReducers } from "@reduxjs/toolkit";
import userDashboardSlice from "../reducers/userState/Dashboard/dashboard";
import userProfileSlice from "../reducers/userState/Profile/userProfile";
import userBotSlice from "../reducers/userState/Chatbot";

const rootReducer = combineReducers({
  userDashboard: userDashboardSlice,
  userProfile: userProfileSlice,
  userBot: userBotSlice,
});

export default rootReducer;
