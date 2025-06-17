import moment from "moment/moment";
import React from "react";

const Card = ({ order, handleDelete }) => {
  const {
    buyerEmail,
    buyerName,
    buyingDate,
    category,
    description,
    image,
    name,
    origin,
    price,
    quantity,
    _id,
  } = order;

  const formattedDate = moment(buyingDate).format("DD-MM-YYYY, hh:mm A");

  return (
    <div className="bg-base-100 text-base-content shadow-lg rounded-xl p-4 relative">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-base-content/80 mb-1">{description}</p>
      <p className="text-sm text-base-content/70">💵 Price: ${price}</p>
      <p className="text-sm text-base-content/70">📦 Quantity: {quantity}</p>
      <p className="text-sm text-base-content/70">👤 Buyer: {buyerName}</p>
      <p className="text-sm text-base-content/70">📧 Email: {buyerEmail}</p>
      <p className="text-sm text-base-content/70">📍 Origin: {origin}</p>
      <p className="text-sm text-base-content/70">📂 Category: {category}</p>
      <p className="text-sm text-base-content/50 mt-2">🕒 Ordered: {formattedDate}</p>

      <button
        onClick={() => handleDelete(_id)}
        className="absolute top-3 right-3 text-error hover:text-error-content"
      >
        ❌
      </button>
    </div>
  );
};

export default Card;
