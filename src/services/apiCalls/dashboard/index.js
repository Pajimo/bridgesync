import { setUserProfile } from "../../../redux/reducers/Profile/userProfile";

import Axios from "../../axiosService";
import {
  setActivePage,
  setChannelMsg,
} from "../../../redux/reducers/Dashboard/dashboard";
import { apiErrorMessage, apiSuccessCall } from "../../../utils/apiErrorCall";

// export const apiCreateChanel = (id, setStatus) => (dispatch) => {
//   Axios.post("/user/createBot", chatData)
//     .then((res) => {
//       // console.log(res.data, "suc");
//       dispatch(setUserProfile(res.data.userData));
//       dispatch(setUserSingleBot(res.data.createdBot));
//       apiSuccessCall(res.data.message);
//       setStatus("success");
//     })
//     .catch((error) => {
//       // console.log(error, "error");
//       apiErrorMessage(error);
//       setStatus("idle");
//     });
// };

export const apiFetchSingleChannel = (channelId, setStatus) => (dispatch) => {
  Axios.get(`/fetchSingleChannel/${channelId}`)
    .then((res) => {
      // console.log(res.data, "suc");
      // dispatch(setUserSingleBot(res.data.botData));
      apiSuccessCall(res.data.message);
      setStatus("success");
    })
    .catch((error) => {
      console.log(error, "error");
      apiErrorMessage(error);
      setStatus("idle");
    });
};

export const apiMessaging = (messageData, setStatus) => (dispatch) => {
  Axios.post("/messaging/workspace", messageData)
    .then((res) => {
      // console.log(res.data, "suc");
      // const chatObj = {
      //   role: "system",
      //   content: res.data.botMessage,
      // };

      // const addAllChat = [...allChatData, chatObj];
      dispatch(setChannelMsg(res.data.workspaceData));
      dispatch(setActivePage(res.data.workspaceData.channels[0]));
      // apiSuccessCall(res.data.message);
      setStatus("success");
    })
    .catch((error) => {
      // console.log(error, "error");
      apiErrorMessage(error);
      setStatus("idle");
    });
};

export const apiFetchWorkspace = (workspaceId, setStatus) => (dispatch) => {
  Axios.get(`/workstation/${workspaceId}`)
    .then((res) => {
      console.log(res.data, "suc");
      // apiSuccessCall(res.data.message);
      setStatus("success");
    })
    .catch((error) => {
      // console.log(error, "error");
      apiErrorMessage(error);
      setStatus("idle");
    });
};
