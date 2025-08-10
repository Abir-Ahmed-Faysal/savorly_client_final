import React, { Suspense } from "react";
import MyFoodCards from "./MyFoodCards";
import useApplicationApi from '../../apiFetch/useApplicationApi.jsx'
import useAuth from "../../Hooks/useAuth";
import Spinner from "../../Components/Spinner/Spinner.jsx";

const MyFood = () => {
  const { user } = useAuth();
  
  const { getDataPromise } = useApplicationApi()
  return (
    <div className="md:mt-36 space-y-8 md:space-y-16 lg:max-w-6xl md:max-w-6xl ">
      <Suspense fallback={<Spinner></Spinner>}>
        <MyFoodCards foodList={getDataPromise(user.email)}></MyFoodCards>
      </Suspense>
    </div>
  );
};

export default MyFood;
