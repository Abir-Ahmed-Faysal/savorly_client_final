import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Spinner from "../../Components/Spinner/Spinner";

const FoodCard = () => {
  const foodDetails = useLoaderData();
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://savorly-lime.vercel.app/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      {/* Main Food Card */}
      <div className="card bg-base-100 shadow-2xl md:flex md:flex-row overflow-hidden rounded-xl">
        {/* Image Section */}
        <figure className="md:w-1/2">
          <img
            src={foodDetails.image}
            alt={foodDetails.name}
            className="h-64 md:h-full w-full object-cover"
          />
        </figure>

        {/* Text Content */}
        <div className="card-body md:w-1/2">
          <h2 className="card-title text-2xl font-bold ">{foodDetails.name}</h2>
          <p className="text-gray-700">{foodDetails.description}</p>

          <div className="text-sm text-gray-600 space-y-1 mt-3">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {foodDetails.category}
            </p>
            <p>
              <span className="font-semibold">Origin:</span>{" "}
              {foodDetails.origin}
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

          <div className="flex items-center justify-between mt-4 gap-2">
            <p className="text-lg font-bold  w-[30%]">৳{foodDetails.price}</p>
            <button
              className="btn  rounded-xl bg-[rgb(218,102,87)] w-[70%]"
              onClick={() => navigate(`/Purchase/${foodDetails._id}`)}
            >
              Purchase
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Foods */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-neutral">
          Other Foods You May Like
        </h2>

        {!loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {foods.slice(0, 4).map((food) => (
              <div
                key={food._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out rounded-xl"
              >
                <figure>
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-48 w-full object-cover rounded-t-xl"
                  />
                </figure>
                <div className="card-body p-5">
                  <h2 className="text-xl font-semibold ">{food.name}</h2>

                  <p className="text-sm text-gray-500 mt-2">Description</p>
                  <p className="text-gray-700 line-clamp-3">
                    {food.description}
                  </p>

                  <p className="text-lg font-bold text-center mt-4 mb-2 ">
                    ৳{food.price}
                  </p>

                  <div className="card-actions">
                    <button
                      className="btn bg-[rgb(218,102,87)] rounded-xl btn-block"
                      onClick={() => navigate(`/food-details/${food._id}`)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Spinner></Spinner>
        )}
      </section>
    </div>
  );
};

export default FoodCard;
