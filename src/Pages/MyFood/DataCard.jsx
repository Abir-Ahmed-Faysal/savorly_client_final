import React from "react";

const DataCard = ({ food, handleSubmit }) => {
  const {
    image,
    name,
    price,
    purchaseCount,
    _id,
    category,
    quantity,
    origin,
    description,
  } = food;

  const handleUpdate = () => {
    document.getElementById("my_modal_5").showModal();
  };

  return (
    <div className="w-10/12 mx-auto my-5 bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
        <p className="text-sm text-gray-700 mb-1">Price: ${price}</p>
        <p className="text-sm text-gray-700 mb-3">Sold: {purchaseCount}</p>
        <button
          onClick={handleUpdate}
          className="w-full py-2 bg-blue-500 text-white text-sm font-medium rounded"
        >
          Update
        </button>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Food Item</h3>
            <form onSubmit={(e) => handleSubmit(e,_id)} className="space-y-3">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Image URL"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                className="input input-bordered w-full"
                required
              />
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
                required
              />
              <input
                type="text"
                name="origin"
                defaultValue={origin}
                placeholder="Origin"
                className="input input-bordered w-full"
                required
              />
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
                required
              />
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </form>
            <form method="dialog">
              <button className="btn">Cancel</button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default DataCard;
