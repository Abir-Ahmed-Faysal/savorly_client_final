import React from "react";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const AddFood = () => {
  const { user } = useAuth();

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

    axios
      .post("http://localhost:3000/recipes", foodItem)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-md my-5">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Food Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter food name"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Food Image URL</label>
          <input
            name="image"
            type="text"
            placeholder="Enter image URL"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            name="category"
            type="text"
            placeholder="e.g. Rice, Dessert"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            name="quantity"
            type="number"
            min="0"
            placeholder="Enter quantity"
            className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
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
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Added By (Email)</label>
            <input
              type="email"
              value={user.email}
              placeholder="User Email"
              className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Short Description</label>
          <textarea
            name="description"
            placeholder="Ingredients, making procedure, etc."
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
