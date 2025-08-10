import React from "react";
import useAuth from "../../Hooks/useAuth";

import useApplicationApi from "../../apiFetch/useApplicationApi";
import { toast } from "react-toastify";

const AddFood = () => {
  const { user } = useAuth();
  const { dataPostPromise } = useApplicationApi();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const foodItem = {
      name: data.name,
      image: data.image,
      category: data.category,
      quantity: parseInt(data.quantity),
      price: parseInt(data.price),
      origin: data.origin,
      description: data.description,
      purchaseCount: 0,
      addedBy: {
        name: user.displayName,
        email: user.email,
      },
    };

    dataPostPromise(foodItem)
      .then(() => toast.success(`${foodItem.name} added success`))
      .catch((error) => console.log(error));
      form.reset();
  };

  return (
    <div className="max-w-2xl md:mt-36 space-y-8 md:space-y-16 mx-auto p-6 bg-base-100 text-base-content shadow rounded-md my-5 transition-colors duration-300">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Food Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Food Image URL</label>
          <input
            name="image"
            type="text"
            placeholder="Enter image URL"
            className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            name="category"
            type="text"
            placeholder="e.g. Rice, Dessert"
            className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            name="quantity"
            type="number"
            min="1"
            placeholder="Enter quantity"
            className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            name="price"
            min="0"
            placeholder="Enter price"
            className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Added By (Name)</label>
            <input
              type="text"
              value={user.displayName}
              placeholder="User Name"
              className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
              disabled
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Added By (Email)</label>
            <input
              type="email"
              value={user.email}
              placeholder="User Email"
              className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
              disabled
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Country of Origin</label>
          <input
            name="origin"
            type="text"
            placeholder="Enter country name"
            className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Short Description</label>
          <textarea
            name="description"
            placeholder="Ingredients, making procedure, etc."
            className="w-full p-2 border border-base-content/20 rounded bg-base-200 text-base-content"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn bg-[rgb(218,102,87)] hover:btn-success/90 transition"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
