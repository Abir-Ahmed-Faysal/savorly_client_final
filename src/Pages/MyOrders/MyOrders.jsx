import React, { Suspense } from 'react';
import OrderCard from './OrderCard';
import { orderedData } from './OrderedData';
import useAuth from '../../Hooks/useAuth';

const MyOrders = () => {
    const {user}=useAuth()
    console.log(user.email);
    
    return (
        <div>
           
            <Suspense fallback={<div>Loading...</div>}>
<OrderCard orderedList={orderedData(user.email)}></OrderCard>
            </Suspense>
        </div>
    );
};

export default MyOrders;