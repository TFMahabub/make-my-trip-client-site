import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const SingleCard = ({service}) => {
  const {_id, servicesId, description, rating, title, img, price} = service;
  console.log(service);

  return (
    <div className='border border-[#d4d4d4] p-3 md:p-4 rounded-lg shadow-lg'>
        <img className='rounded-lg' src={img} alt="" />
        <h3 className='text-xl text-dark-gray font-semibold mt-2'>{title}</h3>
        <p className='text-light-gray'>Description: <span>{description.slice(0, 100) + '...'}</span></p>
        <div className='flex items-center justify-between mt-2'>
          <h4 className='text-md font-semibold text-light-gray'>Cost: $ <span className='text-green'>{price}</span> </h4>
          <Link to='/services'>
            <HiOutlineArrowNarrowRight className='text-2xl text-green' />
          </Link>
        </div>
      
    </div>
  );
};

export default SingleCard;