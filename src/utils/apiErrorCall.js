import { toast } from "react-toastify";

export const apiErrorMessage = (error) => {
  if (error.response) {
    // console.log(error.response, "res");
    toast.error(error.response.data);
  } else {
    // console.log(error.message, "mes");
    toast.error(error.message);
  }
};

export const apiSuccessCall = (response) => {
  toast(response);
};
