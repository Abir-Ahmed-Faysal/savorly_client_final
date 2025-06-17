import React, { useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import useApplicationApi from "../../apiFetch/useApplicationApi";

const PurchaseFood = () => {
  const { user } = useAuth();
  const foodDetails = useLoaderData();
  const { postPurchaseData, dataPatch } = useApplicationApi();

  const { _id, quantity, purchaseCount, name, price, image, ...rest } = foodDetails;
  const [uiQuantity, setUiQuantity] = useState(quantity);
  
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
      name,
      price,
      image,
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

    postPurchaseData(buyingInfo)
      .then((res) => {
        if (res.data.insertedId) {
          dataPatch(_id, updateData).then((res) => {
            if (res.data.modifiedCount) {
              toast.success("Purchase successful!");
              
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
    <div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl mt-6 text-base-content">
      <figure>
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body space-y-3">
        <h2 className="card-title text-2xl">{name}</h2>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="text"
              value={`৳${price}`}
              readOnly
              className="input input-bordered w-full bg-base-200"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Quantity</span>
            </label>
            <input
              type="number"
              min="1"
              max={uiQuantity}
              value={quantityValue}
              onChange={(e) => setQuantityValue(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter quantity"
            />
            <p className="text-xs text-neutral-content mt-1">Available: {uiQuantity}</p>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Buyer Name</span>
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="input input-bordered w-full bg-base-200"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Buyer Email</span>
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="input input-bordered w-full bg-base-200"
            />
          </div>
        </div>

        {uiQuantity === 0 && (
          <p className="italic text-red-500 text-md font-semibold mt-2">
            Item is not available now
          </p>
        )}

        <div className="card-actions justify-end">
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
