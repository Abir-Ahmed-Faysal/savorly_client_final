import React, { Suspense } from 'react';
import OrderCard from './OrderCard';
import { orderedData } from './OrderedData';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const {user}=useAuth()
    return (
        <div>
            thsi is my order page
            <Suspense fallback={<div>Loading...</div>}>
<OrderCard orderedData={orderedData(user.email)}></OrderCard>
            </Suspense>
        </div>
    );
};

export default MyOrders;