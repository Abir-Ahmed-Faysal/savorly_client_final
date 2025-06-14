import React, { use } from 'react';
import TopFoods from './TopFoods';
import { useNavigate } from 'react-router';

const TopSellingFood = ({topSellingFoodData}) => {
    const navigate=useNavigate()
    const allFoods=use(topSellingFoodData)
    const foods=allFoods.slice(0,6)

    return (
        <div className='my-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                 { foods.map(food=><TopFoods key={food._id} food={food}></TopFoods>)}
            </div>
          
              <div className="text-center mt-8">
        <button
          onClick={() => navigate('/all-foods')}
          className="btn bg-green-600 text-white hover:bg-green-700"
        >
          See All
        </button>
      </div>
        </div>
    );
};

export default TopSellingFood;