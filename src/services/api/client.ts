import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10_000,
  withCredentials: true,
});

apiClient.interceptors.response.use(
  response => response.data,
  error => {
    // normalize errors here
    return Promise.reject(error.response?.data ?? error);
  }
);

export default apiClient;
