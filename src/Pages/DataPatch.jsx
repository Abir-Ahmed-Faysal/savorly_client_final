import axios from 'axios';
import React from 'react';

const dataPatch = (id,data) => {
    return axios
             .patch(`http://localhost:3000/recipes/${id}`, data)
             
    
};

export default dataPatch;