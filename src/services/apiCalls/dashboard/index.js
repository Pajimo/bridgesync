import {
  setUserMessage,
  setUserSingleBot,
} from "../../../redux/reducers/userState/Chatbot";
import { setUserProfile } from "../../../redux/reducers/Profile/userProfile";
import {
  apiErrorMessage,
  apiSuccessCall,
} from "../../../../utils/apiErrorCall";
import Axios from "../../axiosService";

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

export const apiMessaging =
  (messageData, setStatus, allChatData) => (dispatch) => {
    Axios.post("/messaging/workspace", messageData)
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

export const apiFetchWorkspace = (workspaceId, setStatus) => (dispatch) => {
  Axios.get(`/workstation/${workspaceId}`, messageData)
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
