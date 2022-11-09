import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CurrentServiceSinglePage from './CurrentServiceSinglePage';

const CurrentServiceReviews = () => {
  const [specificServiceReviews, setSpecificServiceReviews] = useState([]);

    //clicked services Id-
    const clickedService = useLoaderData()
    const { servicesId } = clickedService;

  useEffect(()=>{
    fetch(`https://make-my-trip-server.vercel.app/reviews/${servicesId}`)
    .then(res => res.json())
    .then(data => setSpecificServiceReviews(data))
  },[specificServiceReviews])


  return (
    <div>
      {
        specificServiceReviews?.length === 0?
        <h2 className='my-24 text-xl text-center text-[#f38585] font-semibold'>There has no reviews :(</h2>
        :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-0 mb-24'>
          {
            specificServiceReviews.map(sr => <CurrentServiceSinglePage key={sr._id} sr = {sr}></CurrentServiceSinglePage>)
          }
        </div>
      }
      
    </div>
  );
};

export default CurrentServiceReviews;