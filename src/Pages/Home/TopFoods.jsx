import React from 'react';
import { useNavigate } from 'react-router';

const TopFoods = ({ food }) => {
  const navigate = useNavigate();


  const {
    _id,
    name,
    image,
    category,
    price,
    purchaseCount,
    origin,
    addedBy,
  
  } = food;

  return (
    <div className="my-10 px-4">
   

      <div className="bg-white rounded-2xl shadow p-4 max-w-md mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-1">{name}</h3>
          <p className="text-gray-600 mb-1">Category: {category}</p>
          <p className="text-gray-600 mb-1">Origin: {origin}</p>
          <p className="text-gray-600 mb-1">Seller: {addedBy.name}</p>
          <p className="text-gray-600 mb-1">Price: ৳{price}</p>
          <p className="text-gray-600 mb-3">Purchased: {purchaseCount} times</p>
          <button
            onClick={() => navigate(`/foods/${_id}`)}
            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-md"
          >
            Details
          </button>
        </div>
      </div>

   
    </div>
  );
};

export default TopFoods;
