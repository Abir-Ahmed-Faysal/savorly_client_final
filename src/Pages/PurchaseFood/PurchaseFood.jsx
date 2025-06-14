import React from "react";
import { useLoaderData} from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const PurchaseFood = () => {
  const { user } = useAuth();
  const foodDetailsData = useLoaderData();
  const foodDetails = foodDetailsData[0];

  const handlePurchase = () => {
    const buyerName = user.displayName;
    const buyerEmail = user.email;
    const buyingDate = Date.now();
    const buyingInfo = { ...foodDetails, buyerName, buyerEmail, buyingDate };


    axios
      .post("http://localhost:3000/purchaseData", buyingInfo)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

 

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
          <button className="btn btn-primary" onClick={handlePurchase}>
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFood;
