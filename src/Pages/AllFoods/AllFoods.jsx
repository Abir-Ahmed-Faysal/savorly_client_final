import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Spinner from "../../Components/Spinner/Spinner";

const AllFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); 
  const navigate = useNavigate();
  const {isDark}=useAuth()

  useEffect(() => {
    setLoading(true);
    fetch(`https://savorly-lime.vercel.app/recipes?search=${search}`)
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

  
  const sortedFoods = [...foods].sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.price - b.price;
    } else if (sortOrder === "high-to-low") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
    <div className={`${!isDark ? "bg-gradient-to-r from-pink-200 to-yellow-100" : ""} py-10 text-center`}>

        <h1 className="text-4xl font-bold">All Foods</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-6 px-4">
        <input
          type="text"
          placeholder="Search food..."
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered max-w-xs"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
          {sortedFoods.length !== 0 ? (
            sortedFoods.map((food) => (
              <div key={food._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body p-4 md:p-6">
                  <h2 className="font-bold text-base md:text-lg lg:text-xl">{food.name}</h2>
                  
                  <p className="text-sm md:text-base text-gray-600 font-medium mt-1">Description</p>
                  <p className="text-sm max-w-[] line-clamp-3 md:text-base text-gray-700 mb-3">{food.description}</p>
                  
                  <p className="text-center font-bold text-md md:text-xl lg:text-2xl  my-2">
                    ${food.price}
                  </p>

                  <div className="card-actions justify-end md:mt-4">
                    <button
                      className="btn bg-[rgb(218,102,87)] btn-block rounded-xl text-sm md:text-base"
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
