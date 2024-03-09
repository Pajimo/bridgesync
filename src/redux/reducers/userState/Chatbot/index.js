import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trainingData: {
    botId: "",
    data: "",
    type: "",
  },
  singleBotdata: {
    _id: "",
    botName: "",
    botPicture: "",
    botId: "",
    content: "",
    model: "",
    userId: "",
    dataSource: { text: "" },
    active: true,
    creationDate: "",
    integrations: [],
    temperature: 6,
    lastTrained: "",
  },
  chatMessage: [{ role: "system", content: "hi there are you good?" }],
};

const userBotSlice = createSlice({
  name: "User Chat bot",
  initialState,
  reducers: {
    setUserSingleBot: (state, { payload }) => {
      state.singleBotdata = payload;
    },
    setUserTrainingBot: (state, { payload }) => {
      // console.log(state.trainingData, "pay");
      state.singleBotdata = payload;
    },
    setUserMessage: (state, { payload }) => {
      state.chatMessage = payload;
    },
  },
});

export const { setUserSingleBot, setUserTrainingBot, setUserMessage } =
  userBotSlice.actions;

export default userBotSlice.reducer;
