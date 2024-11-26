import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const requestInterceptor = axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const responseInterceptor = axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // if user is not authenticated, redirect to login page
      window.location.href = "/login";
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const removeInterceptors = () => {
  axiosInstance.interceptors.request.eject(requestInterceptor);
  axiosInstance.interceptors.response.eject(responseInterceptor);
};

export default axiosInstance;
