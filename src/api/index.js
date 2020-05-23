import axios from "axios";
import qs from "qs";
import { API_BASE_URL as baseURL } from "../config/global.config.js";
const instance = axios.create({
  baseURL,
  timeout: 1000,
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: "repeat" });
  }
});

instance.interceptors.response.use(
  response => response.data,
  error => {
    error = error.response;
    if (error && error.status === 401) {
      let loginUrl = error.data || "";
      const logoutUrl = loginUrl.replace("casJump.jsp", "logout");
      window.localStorage.setItem("logoutUrl", logoutUrl);
      loginUrl = loginUrl + `?returnUrl=${window.location.href}`;
      window.location.replace(loginUrl);
    }
    return Promise.reject(error);
  }
);

export default instance;

export const get = (url, params) => instance.get(url, { params });

export const post = (url, data, config) => instance.post(url, data, config);
