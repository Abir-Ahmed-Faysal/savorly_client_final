import React, { Suspense } from 'react';
import { topFood } from './TopSellingData';
import TopSellingFood from './TopSellingFood';

const Home = () => {
    const topSellingFoodData=topFood()
    
    return (
        <div >
            <Suspense fallback={<div>loading...</div>}>
                 <TopSellingFood topSellingFoodData={topSellingFoodData}></TopSellingFood>
            </Suspense>
           
        </div>
    );
};

export default Home;