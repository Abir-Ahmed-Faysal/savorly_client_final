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
    document.getElementById(`my_modal_${_id}`).showModal();
  };

  return (
    <div className="w-10/12 mx-auto my-5 bg-base-100 text-base-content rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <img src={image} alt={name} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{name}</h2>
        <p className="text-sm mb-1">Price: ${price}</p>
        <p className="text-sm mb-3">Sold: {purchaseCount}</p>
        <button
          onClick={handleUpdate}
          className="w-full py-2 bg-primary text-primary-content text-sm font-medium rounded hover:bg-primary-focus transition"
        >
          Update
        </button>

        <dialog id={`my_modal_${_id}`} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-base-100 text-base-content">
            <h3 className="font-bold text-lg mb-4">Update Food Item</h3>
            <form onSubmit={(e) => handleSubmit(e, _id)} className="space-y-3">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Name"
                className="input input-bordered w-full bg-base-200 text-base-content"
                required
              />
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Image URL"
                className="input input-bordered w-full bg-base-200 text-base-content"
                required
              />
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Category"
                className="input input-bordered w-full bg-base-200 text-base-content"
                required
              />
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="Quantity"
                className="input input-bordered w-full bg-base-200 text-base-content"
                required
              />
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full bg-base-200 text-base-content"
                required
              />
              <input
                type="text"
                name="origin"
                defaultValue={origin}
                placeholder="Origin"
                className="input input-bordered w-full bg-base-200 text-base-content"
                required
              />
              <textarea
                name="description"
                defaultValue={description}
                placeholder="Description"
                className="textarea textarea-bordered w-full bg-base-200 text-base-content"
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
