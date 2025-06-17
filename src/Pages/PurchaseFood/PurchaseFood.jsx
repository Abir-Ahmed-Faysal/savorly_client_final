import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import dataPatch from "../DataPatch";

const PurchaseFood = () => {
  const { user } = useAuth();
  const foodDetails = useLoaderData();
  console.log(foodDetails);
  
  const { _id, quantity, purchaseCount, ...rest } = foodDetails;
  const [uiQuantity, setUiQuantity] = useState(quantity);
  const [uiPurchaseCount, setUiPurchaseCount] = useState(purchaseCount);
  const foodDataId = _id;

  const [quantityValue, setQuantityValue] = useState(1);

  const handlePurchase = () => {
    const buyerName = user.displayName;
    const buyerEmail = user.email;
    const buyingDate = Date.now();
    const orderedQuantity = parseInt(quantityValue);

    if (user.email === foodDetails.addedBy.email) {
      return toast.error("You can't purchase your own food item");
    }

    if (isNaN(orderedQuantity) || orderedQuantity < 1) {
      return toast.error("Please enter a valid quantity");
    }

    if (orderedQuantity > uiQuantity) {
      return toast.error("Not enough quantity available");
    }

    const buyingInfo = {
      ...rest,
      foodDataId,
      buyerName,
      buyerEmail,
      buyingDate,
      orderedQuantity,
      quantity: quantity - orderedQuantity,
      purchaseCount: purchaseCount + orderedQuantity,
    };

    const updateData = {
      quantity: buyingInfo.quantity,
      purchaseCount: buyingInfo.purchaseCount,
    };
    axios
      .post("http://localhost:3000/purchaseData", buyingInfo)
      .then((res) => {
        if (res.data.insertedId) {
          dataPatch(_id, updateData).then((res) => {
            if (res.data.modifiedCount) {
              toast.success("Purchase successful!");
              setUiPurchaseCount((prev) => prev + orderedQuantity);
              setUiQuantity((prev) => prev - orderedQuantity);
            }
          });
        } else {
          toast.error("Purchase failed. Try again.");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong");
      });
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
            <span className="font-semibold">Available Quantity:</span>{" "}
            {uiQuantity}
          </p>
          <p>
            <span className="font-semibold">Price:</span> ৳{foodDetails.price}
          </p>
          <p>
            <span className="font-semibold">Purchase Count:</span>
            {uiPurchaseCount}
          </p>

          {uiQuantity === 0 && (
            <p className="italic text-red-500 text-md font-semibold">
              Item is not available now
            </p>
          )}

          <div className="w-32 mt-2">
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <input
              value={quantityValue}
              onChange={(e) => setQuantityValue(e.target.value)}
              type="number"
              min="1"
              max={uiQuantity}
              className="input input-bordered w-full"
              placeholder="Enter quantity"
            />
          </div>
        </div>

        <div className="card-actions justify-end mt-4">
          <button
            disabled={uiQuantity === 0}
            className="btn btn-primary"
            onClick={handlePurchase}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFood;
