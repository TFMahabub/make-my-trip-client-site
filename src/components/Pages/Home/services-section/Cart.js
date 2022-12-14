import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCard from './SingleCard';

const Cart = () => {
  const [services, setServices] = useState([]);

  useEffect(()=>{
    fetch('https://make-my-trip-server.vercel.app/home_services')
    .then(res=>res.json())
    .then(data => setServices(data))
  },[])
  return (
    <section>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8'>
      {
        services.map(service => <SingleCard key={service._id} service={service} />)
      }
    </div>
    <Link to = '/services'>
      <button className=' mt-8 text-center bg-green hover:bg-dark-green px-6 py-3 text-[#fff] rounded-md text-lg font-medium tracking-wide'>
        See More
      </button>
    </Link>
    </section>
  );
};

export default Cart;