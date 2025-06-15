import React, { use, useState } from "react";
import Card from "./Card";
import deleteData from "./deleteData";
import useAuth from "../../Hooks/useAuth";
import { orderedData } from "./OrderedData";

const OrderCard = ({ orderedList }) => {
  const myOrders = use(orderedList);
  const [orders, setOrder] = useState(myOrders);
  const { user } = useAuth();

  const handleDelete = (id) => {
    deleteData(id).then((result) => {
      if (result.data.deletedCount) {
        orderedData(user.email).then((data) => setOrder(data));
      }
    });
  };

  return (
    <>
      {orders.map((order) => (
        <Card key={order._id} order={order} handleDelete={handleDelete}></Card>
      ))}
    </>
  );
};

export default OrderCard;
