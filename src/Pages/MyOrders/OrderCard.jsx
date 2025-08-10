import React, { use, useState } from "react";
import Card from "./Card";

import useAuth from "../../Hooks/useAuth";

import useApplicationApi from "../../apiFetch/useApplicationApi";

const OrderCard = ({ orderedList }) => {
  const { deletePurchaseData,purchaseData } = useApplicationApi();
  const myOrders = use(orderedList);
  const [orders, setOrder] = useState(myOrders);
  const { user } = useAuth();

  const handleDelete = (id) => {
    deletePurchaseData(id).then((result) => {
      if (result.data.deletedCount) {
        purchaseData(user.email).then((data) => setOrder(data));
      }
    });
  };

  return (
    <div className={`${orders.length !== 0?"grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5":''} `}>
      {orders.length !== 0 ? (
        orders.map((order) => (
          <Card
            key={order._id}
            order={order}
            handleDelete={handleDelete}
          ></Card>
        ))
      ) : (
        <div className="h-[calc(100vh-275px)] flex flex-col items-center justify-center">
          <p className="text-orange-400 italic text-2xl font-semibold">
            You have not order yet
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
