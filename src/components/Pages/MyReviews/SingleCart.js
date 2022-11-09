import React from 'react';
import Rating0 from '../Home/services-section/Ratings/Rating0';
import Rating4 from '../Home/services-section/Ratings/Rating4';
import Rating45 from '../Home/services-section/Ratings/Rating45';
import Rating5 from '../Home/services-section/Ratings/Rating5';

const SingleCart = ({review}) => {
  const { name, image, rating, reviewText } = review;


  return (
    <div className='mt-10 border border-[#e6e6e6] shadow-lg rounded-lg p-6'>
      <img className='w-14 h-14 rounded-full mx-auto' src={image? image : "https://i.ibb.co/QNd1bdZ/user.jpg"} alt="" />
      <h3 className='text-lg font-semibold tracking-wide text-center text-green'>{name}</h3>
      <div className="flex items-center space-x-1 justify-center">
              {
                rating === 0 && <Rating0></Rating0>
              }
              {
                rating === 4 && <Rating4></Rating4>
              }
              {
                rating === 4.5 && <Rating45></Rating45>
              }
              {
                rating === 5 && <Rating5></Rating5>
              }
              <p className="text-light-gray font-medium">{rating}</p>
        </div>
        <p className='text-light-gray mt-2'>{reviewText.slice(0, 70)}</p>
    </div>
  );
};

export default SingleCart;