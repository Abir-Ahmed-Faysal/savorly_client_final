import axios from "axios";
import React from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

const useSecureApi = () => {
  const { user } = useAuth();

  instance.interceptors.request.use((config) => {
    if (user.accessToken) {
      config.headers.Authorization = `Bearer ${user.accessToken}`;
    }

    return config;
  });
};

export default useSecureApi;
