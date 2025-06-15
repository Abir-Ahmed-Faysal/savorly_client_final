import axios from 'axios';
import React from 'react';

export const deleteData = (id) => {
    console.log('form',id);
    
    return (
        axios.delete(`http://localhost:3000/purchaseData/${id}`)
    )
};

export default deleteData;