import React, { use, useState } from "react";
import DataCard from "./DataCard";

import useAuth from "../../Hooks/useAuth";
import useApplicationApi from "../../apiFetch/useApplicationApi";
import { toast } from "react-toastify";

const MyFoodCards = ({ foodList }) => {
  const foodsList = use(foodList);
  const [formData, setFormData] = useState(foodsList);
  const { user } = useAuth();
  const { getDataPromise, dataPatch } = useApplicationApi();

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const updatedData = Object.fromEntries(data.entries());

    updatedData.price = parseInt(updatedData.price);
    updatedData.quantity = parseInt(updatedData.quantity);

    dataPatch(id, updatedData).then((res) => {
      if (res.data.modifiedCount > 0) {
        getDataPromise(user.email).then((data) => setFormData(data));
      }
    });
    toast.success("updated");
    e.target.reset();
    document.getElementById(`my_modal_${id}`).close();
  };

  return (
    <>
    
    {formData.length === 0 ? (
  <p className="text-center text-xl text-gray-500 mt-10">
    You haven't added any recipe.
  </p>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {formData.map((food) => (
      <DataCard
        handleSubmit={handleSubmit}
        key={food._id}
        food={food}
      ></DataCard>
    ))}
  </div>
)}
</>
  );
};

export default MyFoodCards;
