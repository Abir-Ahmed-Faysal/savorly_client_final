import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/recipes?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [search]);

  return (
    <div>
      <div className="bg-gradient-to-r from-pink-200 to-yellow-100 py-10 text-center">
        <h1 className="text-4xl font-bold">All Foods</h1>
      </div>

      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search food..."
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 pb-10">
          {foods.length !== 0 ? (
            foods.map((food) => (
              <div key={food._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{food.name}</h2>
                  <p>{food.description}</p>
                  <p>
                    <span className="font-semibold">Quantity:</span>{" "}
                    {food.quantity}
                  </p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/food-details/${food._id}`)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-full col-span-full">
              <p className="text-xl font-medium text-red-400">No food found</p>
              <img
                className="mx-auto"
                src="https://i.ibb.co/twBSH81f/935ef3e9c164fe37ddde01ccd8cec4ba.gif"
                alt=""
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AllFoods;
