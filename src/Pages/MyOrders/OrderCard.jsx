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
    <div>
      {orders.length!==0?orders.map((order) => (
        <Card key={order._id} order={order} handleDelete={handleDelete}></Card>
      )):<div className="h-[calc(100vh-275px)] flex flex-col items-center justify-center"><p className="text-orange-400 italic text-2xl font-semibold">You have not order yet</p></div>}
    </div>
  );
};

export default OrderCard;
