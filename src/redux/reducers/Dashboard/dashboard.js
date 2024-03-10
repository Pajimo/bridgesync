import { createSlice } from "@reduxjs/toolkit";

const channelsStructure = { name: "", members: [], messages: [] };

const initialState = {
  currentDashboardNav: "Dashboard",
  workspace: [
    {
      id: "",
      name: "",
      channels: [channelsStructure],
      members: [channelsStructure],
    },
  ],
  activePage: { id: "", name: "", members: "", messages: [] },
};

const userDashboardSlice = createSlice({
  name: "User Dashboard",
  initialState,
  reducers: {
    setDashboardNav: (state, { payload }) => {
      state.currentDashboardNav = payload;
    },
    setWorkspaceInfo: (state, { payload }) => {
      state.workspace = payload;
    },
    setActivePage: (state, { payload }) => {
      state.activePage = payload;
    },
    setChannelMsg: (state, { payload }) => {
      state.workspace = payload;
    },
  },
});

export const {
  setDashboardNav,
  setWorkspaceInfo,
  setActivePage,
  setChannelMsg,
} = userDashboardSlice.actions;

export default userDashboardSlice.reducer;
