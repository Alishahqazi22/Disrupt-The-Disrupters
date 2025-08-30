import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log("Interceptor Response:", response);
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
