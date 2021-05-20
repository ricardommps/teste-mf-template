import axios from "axios";

const url = process.env.REACT_APP_HOST; // Set your url to em .env
const api = axios.create({
  baseURL: url,
  timeout: 5000,
});

const onResponseFailure = (error) => {
  const errMsg = error.toString();
  if (errMsg === "Error: timeout of 1000ms exceeded") {
    window.location.reload();
  }
  return Promise.reject(error);
};

api.interceptors.response.use((response) => response, onResponseFailure);

export default api;
