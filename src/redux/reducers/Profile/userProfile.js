import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const initialState = {
  userProfile: {
    _id: "",
    userId: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  },
  isAuthenticated: false,
};

const userProfileSlice = createSlice({
  name: "User Profile",
  initialState,
  reducers: {
    setUserProfile: (state, { payload }) => {
      state.userProfile = payload;
    },
    setUserAuthStatus: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
  },
});

export const { setUserProfile, setUserAuthStatus } = userProfileSlice.actions;

export default userProfileSlice.reducer;
