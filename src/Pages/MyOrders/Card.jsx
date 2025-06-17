import moment from "moment/moment";
import React from "react";
import {
  FaMoneyBillWave,
  FaBox,
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTag,
  FaClock,
  FaTimes,
} from "react-icons/fa";

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
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-sm text-base-content/80 mb-2">{description}</p>

      <div className="space-y-1 text-sm text-base-content/70">
        <p className="flex items-center gap-2">
          <FaMoneyBillWave /> Price: ${price}
        </p>
        <p className="flex items-center gap-2">
          <FaBox /> Quantity: {quantity}
        </p>
        <p className="flex items-center gap-2">
          <FaUser /> Buyer: {buyerName}
        </p>
        <p className="flex items-center gap-2">
          <FaEnvelope /> Email: {buyerEmail}
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt /> Origin: {origin}
        </p>
        <p className="flex items-center gap-2">
          <FaTag /> Category: {category}
        </p>
        <p className="flex items-center gap-2 text-base-content/50 mt-2">
          <FaClock /> Ordered: {formattedDate}
        </p>
      </div>

      <button
        onClick={() => handleDelete(_id)}
        className="absolute top-3 right-3 text-error hover:text-error-content text-lg"
        title="Delete"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default Card;
