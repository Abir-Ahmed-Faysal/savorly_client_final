import React, { use } from 'react';
import DataCard from './DataCard';


const MyFoodCards = ({foodList}) => {
    const foodsList=use(foodList)


    return (
        <div>
           {
            foodsList.map(food=><DataCard key={food._id} food={food}></DataCard>)
           } 
        </div>
    );
};

export default MyFoodCards;