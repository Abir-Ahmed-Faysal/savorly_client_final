import React, { use } from 'react';

const OrderCard = ({orderedData}) => {
const myOrders=use(orderedData)
console.log(myOrders);

    return (
        <div>
            
        </div>
    );
};

export default OrderCard;