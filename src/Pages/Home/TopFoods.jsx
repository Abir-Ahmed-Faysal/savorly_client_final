import React from 'react';
import { useNavigate } from 'react-router';

const TopFoods = ({ food }) => {
  const navigate = useNavigate();

  const {
    _id,
    name,
    image,
   
    price,
   
    description
    
  } = food;

  return (
    <div className="my-10 px-4">
      <div className="bg-base-100 text-base-content rounded-2xl shadow p-4 max-w-md mx-auto">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />
        <div>
          <h3 className="lg:text-2xl md:text-xl text-lg font-semibold mb-1">{name}</h3>
          <p>Description</p>
          <div  >
<p className="line-clamp-2">{description}</p>
          </div>
            <h1 className='font-bold text-center md:text-md lg:text-xl  text-base-content my-1'>${price}</h1>
          <div>
            
          </div>
          <button
            onClick={() => navigate(`/food-details/${_id}`)}
            className="btn  btn-block bg-[rgb(255,141,107)] rounded-xl"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopFoods;
