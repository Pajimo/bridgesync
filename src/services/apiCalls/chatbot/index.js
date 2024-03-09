import {
  setUserMessage,
  setUserSingleBot,
} from "../../../../redux/reducers/userState/Chatbot";
import { setUserProfile } from "../../../../redux/reducers/userState/Profile/userProfile";
import {
  apiErrorMessage,
  apiSuccessCall,
} from "../../../../utils/apiErrorCall";
import Axios from "../../../axiosService";

export const apiCreateChatBot = (chatData, setStatus) => (dispatch) => {
  Axios.post("/user/createBot", chatData)
    .then((res) => {
      // console.log(res.data, "suc");
      dispatch(setUserProfile(res.data.userData));
      dispatch(setUserSingleBot(res.data.createdBot));
      apiSuccessCall(res.data.message);
      setStatus("success");
    })
    .catch((error) => {
      // console.log(error, "error");
      apiErrorMessage(error);
      setStatus("idle");
    });
};

export const apiTrainBot = (chatData, setStatus) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  Axios.post("/user/TrainBot", chatData)
    .then((res) => {
      // console.log(res.data, "suc");
      dispatch(setUserSingleBot(res.data.botData));
      apiSuccessCall(res.data.message);
      setStatus("success");
    })
    .catch((error) => {
      // console.log(error, "error");
      apiErrorMessage(error);
      setStatus("idle");
    });
};

export const apiFetchSingleBot = (id, setStatus) => (dispatch) => {
  Axios.post("/user/fetchSingleBot", { botId: id })
    .then((res) => {
      // console.log(res.data, "suc");
      dispatch(setUserSingleBot(res.data.botData));
      apiSuccessCall(res.data.message);
      setStatus("success");
    })
    .catch((error) => {
      console.log(error, "error");
      apiErrorMessage(error);
      setStatus("idle");
    });
};

export const apiMessageBot =
  (messageData, setStatus, allChatData) => (dispatch) => {
    Axios.post("/user/messagingBot", messageData)
      .then((res) => {
        // console.log(res.data, "suc");
        const chatObj = {
          role: "system",
          content: res.data.botMessage,
        };

        const addAllChat = [...allChatData, chatObj];
        dispatch(setUserMessage(addAllChat));
        // apiSuccessCall(res.data.message);
        setStatus("success");
      })
      .catch((error) => {
        // console.log(error, "error");
        apiErrorMessage(error);
        setStatus("idle");
      });
  };
