import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentDashboardNav: "Dashboard",
};

const userDashboardSlice = createSlice({
  name: "User Dashboard",
  initialState,
  reducers: {
    setDashboardNav(state, { payload }) {
      state.currentDashboardNav = payload;
    },
  },
});

export const { setDashboardNav } = userDashboardSlice.actions;

export default userDashboardSlice.reducer;
