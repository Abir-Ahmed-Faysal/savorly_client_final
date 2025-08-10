import React, { use } from 'react';
import TopFoods from './TopFoods';
import { useNavigate } from 'react-router';

const TopSellingFood = ({topSellingFoodData}) => {
    const navigate=useNavigate()
    const allFoods=use(topSellingFoodData)
    const foods=allFoods.slice(0,8)

    return (
        <div className='my-5 '>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                 { foods.map(food=><TopFoods key={food._id} food={food}></TopFoods>)}
            </div>
          
              <div className="text-center mt-8">
        <button
          onClick={() => navigate('/all-foods')}
          className="btn bg-[rgb(218,102,87)] text-white hover:bg-orange-500"
        >
          See All
        </button>
      </div>
        </div>
    );
};

export default TopSellingFood;