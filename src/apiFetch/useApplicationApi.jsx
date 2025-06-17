import React from "react";
import useSecureApi from "../Hooks/useSecureApi";

const useApplicationApi = () => {
  const axiosSecure = useSecureApi();
  const myApplicationPromise = (email) => {
    return axiosSecure
      .get(`/my-recipes?email=${email}`)
      .then((res) => res.data);
  };
  return { myApplicationPromise };
};

export default useApplicationApi;
