import React from "react";
import useSecureApi from "../Hooks/useSecureApi";

const useApplicationApi = () => {
  const axiosSecure = useSecureApi();




  const getDataPromise = (email) => {
    return axiosSecure
      .get(`/my-recipes?email=${email}`)
      .then((res) => res.data);
  };

  const purchaseData=(email)=>{
    return axiosSecure
      .get(`/purchaseData?email=${email}`)
      .then((res) => res.data);
  }
  const deletePurchaseData=(id)=>{
 return axiosSecure.delete(`/purchaseData/${id}`)
  }

  const postPurchaseData=(buyingInfo)=>{
    return axiosSecure.post('/purchaseData',buyingInfo)
  }

  const dataPostPromise = (foodItem) => {
    return axiosSecure.post("/recipes", foodItem);
  };
  const dataPatch = (id, data) => {
    return axiosSecure.patch(`recipes/${id}`, data);
  };

  return { getDataPromise,deletePurchaseData, dataPostPromise, dataPatch,purchaseData,postPurchaseData };
};

export default useApplicationApi;
