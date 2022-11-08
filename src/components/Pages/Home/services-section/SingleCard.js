import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Rating4 from './Ratings/Rating4';
import Rating45 from './Ratings/Rating45';
import Rating5 from './Ratings/Rating5';

const SingleCard = ({service}) => {
  const {_id, servicesId, description, rating, title, img, price} = service;
  console.log(service);

  return (
    <div className='border border-[#dadada] p-3 md:p-4 rounded-lg shadow-lg'>
        <img className='rounded-lg' src={img} alt="" />
        <div className='flex items-center justify-between'>
          <h3 className='text-xl text-dark-gray font-semibold mt-2'>{title}</h3>
          <div>
            {
              rating === "4.0" && <Rating4></Rating4>
            }
            {
              rating === "4.5" && <Rating45></Rating45>
            }
            {
              rating === "5" && <Rating5></Rating5>
            }
          </div>
        </div>
        <p className='text-light-gray mt-1'>Description: <span>{description.slice(0, 100) + '...'}</span></p>
        <div className='flex items-center justify-between mt-2'>
          <h4 className='text-md font-semibold text-light-gray'>Cost: $<span className='text-green'>{price}</span> </h4>
          <Link to={`/service/${servicesId}`} className='flex items-center border border-green px-3 py-1 rounded-md hover:bg-light-green text-light-gray font-medium'>
            Details
            <AiOutlineArrowRight className='text-lg text-green ml-1' />
          </Link>
        </div>
      
    </div>
  );
};

export default SingleCard;