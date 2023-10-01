import { useState } from "react";
import Axios from "axios";

const AxiosInstance = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [exp, setExp] = useState("");

  const axiosJWT = Axios.create();

  const updateToken = response => {
    config.headers.Authorization = `Bearer ${response.data.accessToken}`;
    setToken(response.data.accessToken);
    const decoded = jwt_decode(response.data.accessToken);
    setUsername(decoded.username);
    setExp(decoded.exp);
  };

  axiosJWT.interceptors.request.use(
    async config => {
      const currentDate = new Date();
      if (exp * 1000 < currentDate.getTime()) {
        try {
          const response = await Axios.get("http://localhost:4000/auth/token");
          updateToken(response);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return axiosJWT;
};

export default AxiosInstance;
