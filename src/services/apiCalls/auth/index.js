import { useNavigate } from "react-router";
import {
  setUserAuthStatus,
  setUserProfile,
} from "../../../redux/reducers/Profile/userProfile";
import Axios from "../../axiosService";
import { apiErrorMessage } from "../../../utils/apiErrorCall";
import {
  setActivePage,
  setWorkspaceInfo,
} from "../../../redux/reducers/Dashboard/dashboard";

export const apiLogInUser =
  ({ email, password }, setStatus) =>
  (dispatch) => {
    Axios.post("/user/login", { email, password })
      .then((response) => {
        // console.log(response.data, "res");
        const { userData, workspaceData, message } = response.data;
        dispatch(setUserProfile(userData));
        dispatch(setWorkspaceInfo(workspaceData));
        dispatch(setActivePage(workspaceData.channels[0]));
        setStatus("success");
        // dispatch(setUserAuthStatus(true));
      })
      .catch((error) => {
        // console.log(error, "error");
        apiErrorMessage(error);
        setStatus("idle");
        //   dispatch(loginFail("Invalid credentials provided"));
      });
  };

export const apiRegisterUser = (data, setError, setStatus) => (dispatch) => {
  Axios.post("/user/register", data)
    .then((response) => {
      const { userData, workspaceData, message } = response.data;
      setError("");
      setStatus("success");
      dispatch(setUserProfile(userData));
      dispatch(setWorkspaceInfo(workspaceData));
      dispatch(setActivePage(workspaceData.channels[0]));
      // setError(response.);
      //   dispatch(loginSuccess(response.data));
    })
    .catch((error) => {
      // console.log(error, "error");
      setStatus("idle");
      setError(error?.response?.data);
      //   dispatch(loginFail("Invalid credentials provided"));
    });
};

export const apiLogoutUser = (navigate) => (dispatch) => {
  dispatch(setUserAuthStatus(false));
  navigate("/auth/user/login");
  // Axios.post
};
