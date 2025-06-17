import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const useSecureApi = () => {
  const { user } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    if (user.accessToken) {
      config.headers.authorization = `Bearer ${user.accessToken}`;
    }

    return config;
  });

  return axiosInstance
};

export default useSecureApi;
