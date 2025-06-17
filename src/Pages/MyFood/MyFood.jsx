import React, { Suspense } from "react";
import MyFoodCards from "./MyFoodCards";

import useAuth from "../../Hooks/useAuth";
import useApplicationApi from "../../apiFetch/useApplicationApi";
const MyFood = () => {
  const { user } = useAuth();
  const { myApplicationPromise } = useApplicationApi();
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <MyFoodCards foodList={myApplicationPromise(user.email)}></MyFoodCards>
      </Suspense>
    </div>
  );
};

export default MyFood;
