import React, { Suspense } from 'react';
import OrderCard from './OrderCard';

import useAuth from '../../Hooks/useAuth';
import useApplicationApi from '../../apiFetch/useApplicationApi';

const MyOrders = () => {
    const {user}=useAuth()
   const {purchaseData}=useApplicationApi()
    
    return (
        <div>
           
            <Suspense fallback={<div>Loading...</div>}>
<OrderCard orderedList={purchaseData(user.email)}></OrderCard>
            </Suspense>
        </div>
    );
};

export default MyOrders;