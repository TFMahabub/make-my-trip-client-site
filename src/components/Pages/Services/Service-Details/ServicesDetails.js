import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Rating4 from '../../Home/services-section/Ratings/Rating4';
import Rating45 from '../../Home/services-section/Ratings/Rating45';
import Rating5 from '../../Home/services-section/Ratings/Rating5';
//react-photo-viewer-
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesDetails = () => {
  const service = useLoaderData()
  const { _id, img, title, description, price, rating, servicesId, } = service;

  
  return (
    <section className=' mt-6'>
      <h2 className='text-center text-3xl font-bold text-dark-gray'>Service Details</h2>
      <div className='border border-[#dadada] max-w-xl mt-4 mx-auto p-3 md:p-4 rounded-lg flex flex-col justify-between shadow-lg'>
        <div>
        <PhotoProvider>
          <PhotoView src={img}>
            <img className='rounded-lg' src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
          <div className='flex items-center justify-between mt-3'>
            <h3 className='text-2xl text-dark-gray font-semibold'>{title}</h3>
            <div className="flex items-center space-x-1">
              {
                rating === "4.0" && <Rating4></Rating4>
              }
              {
                rating === "4.5" && <Rating45></Rating45>
              }
              {
                rating === "5" && <Rating5></Rating5>
              }
              <p className="text-light-gray font-medium">{rating}</p>
            </div>
          </div>
          <p className='text-light-gray mt-1'><span>{description}</span></p>
        </div>
        <h4 className='mt-4 text-xl font-semibold text-light-gray'>Cost: <span className='text-green'>${price}</span> </h4>
      
      </div>
    </section>
  );
};

export default ServicesDetails;