import React, { Suspense } from "react";
import MyFoodCards from "./MyFoodCards";
import useApplicationApi from '../../apiFetch/useApplicationApi.jsx'
import useAuth from "../../Hooks/useAuth";
import Spinner from "../../Components/Spinner/Spinner.jsx";

const MyFood = () => {
  const { user } = useAuth();
  
  const { getDataPromise } = useApplicationApi()
  return (
    <div>
      <Suspense fallback={<Spinner></Spinner>}>
        <MyFoodCards foodList={getDataPromise(user.email)}></MyFoodCards>
      </Suspense>
    </div>
  );
};

export default MyFood;
