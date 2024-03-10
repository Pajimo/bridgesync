import Axios, { AxiosError, AxiosRequestConfig } from "axios";

const ApiUrl = "https://intelliverback.azurewebsites.net/api/bridgesync";

const devApiUrl = "http://localhost:7071/api/";

Axios.defaults.baseURL = devApiUrl;
// process.env.REACT_APP_NODE_ENV === "development" ? devApiUrl : ApiUrl;

// console.log(process.env.REACT_APP_NODE_ENV, "proc");

// Axios.defaults.timeout = 10000;

Axios.defaults.validateStatus = (status) =>
  (status === 200 || status < 300) && (status >= 400 || status < 500);

// Axios.defaults.withCredentials = true;

Axios.interceptors.request.use(
  async (config) => {
    const token = "";

    if (token) {
      // console.log(token);
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    // const networkState = await NetInfo.fetch();

    // if (!networkState.isConnected) {
    //   Toast.show({
    //     type: 'error',
    //     position: 'bottom',
    //     text1: 'Info',
    //     text2: 'No Internet Access!',
    //   });
    // }
    // console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// const setToken = async () => {
//   const jsonValue = await AsyncStorage.getItem('userDetails');
//   const value = await (jsonValue != null ? JSON.parse(jsonValue).token : '');
//   const token = value !== '' ? value.token : value;
//   Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

export default Axios;
