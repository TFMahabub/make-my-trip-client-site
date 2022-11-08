import React, { useEffect, useState } from 'react';
import SingleCart from './SingleCart';

const Cart = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {
        services.map(service => <SingleCart key={service._id} service={service}></SingleCart>)
      }
    </div>
  );
};

export default Cart;