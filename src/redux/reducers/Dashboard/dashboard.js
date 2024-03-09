import { createSlice } from "@reduxjs/toolkit";

const channelsStructure = { name: "", members: [], messages: [] };

const initialState = {
  currentDashboardNav: "Dashboard",
  workspace: [
    {
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
  },
});

export const { setDashboardNav, setWorkspaceInfo, setActivePage } =
  userDashboardSlice.actions;

export default userDashboardSlice.reducer;
