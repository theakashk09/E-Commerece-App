import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const{productId} = useParams();
  
  


  return (
    <div>
      <p>Hellos</p>
    </div>
  )


}

export default Product
