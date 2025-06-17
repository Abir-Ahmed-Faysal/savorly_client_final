import React, { use, useState } from "react";
import DataCard from "./DataCard";

import addedFoodData from "./addedFoodData";
import useAuth from "../../Hooks/useAuth";
import dataPatch from "../DataPatch";

const MyFoodCards = ({ foodList }) => {
  const foodsList = use(foodList);
  const [formData, setFormData] = useState(foodsList);
  const { user } = useAuth();

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const updatedData = Object.fromEntries(data.entries());

    updatedData.price = parseInt(updatedData.price);
    updatedData.quantity = parseInt(updatedData.quantity);

   dataPatch(id,updatedData).then((res) => {
        if (res.data.modifiedCount > 0) {
          addedFoodData(user.email).then((data) => setFormData(data));
        }
      });
alert('updated')
    document.getElementById(`my_modal_${id}`).close();
  };

  return (
    <div>
      {formData.map((food) => (
        <DataCard
          handleSubmit={handleSubmit}
          key={food._id}
          food={food}
        ></DataCard>
      ))}
    </div>
  );
};

export default MyFoodCards;
