import axios from 'axios';
import React from 'react';

const addedFoodData = (email) => {

    return axios.get(`http://localhost:3000/my-recipes?email=${email}`).then(res=>res.data)
};

export default addedFoodData;