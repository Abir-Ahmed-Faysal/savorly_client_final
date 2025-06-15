import React, { Suspense } from "react";
import MyFoodCards from "./MyFoodCards";
import addedFoodData from "./addedFoodData";
import useAuth from "../../Hooks/useAuth";

const MyFood = () => {
  const {user}=useAuth()
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <MyFoodCards foodList={addedFoodData(user.email)}></MyFoodCards>
      </Suspense>
    </div>
  );
};

export default MyFood;
