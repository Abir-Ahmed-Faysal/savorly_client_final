import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const FoodCard = () => {
  const foodDetails = useLoaderData();
  console.log(foodDetails);
  
  const navigate = useNavigate();

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={foodDetails.image}
          alt={foodDetails.name}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodDetails.name}</h2>
        <p>{foodDetails.description}</p>

        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-semibold">Category:</span>{" "}
            {foodDetails.category}
          </p>
          <p>
            <span className="font-semibold">Origin:</span> {foodDetails.origin}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span>{" "}
            {foodDetails.quantity}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ৳{foodDetails.price}
          </p>
          <p>
            <span className="font-semibold">Purchase Count:</span>{" "}
            {foodDetails.purchaseCount ?? 0}
          </p>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/Purchase/${foodDetails._id}`)}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
