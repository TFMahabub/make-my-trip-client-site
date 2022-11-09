import React from 'react';
import PrivateRoute from '../../../../../routers/PrivateRoute';
import CurrentServiceReviews from './CurrentServiceReviews';
import PostReviews from './Post-Reviews/PostReviews';

const ReviewSection = () => {
  return (
    <section className=' mt-36'>
      <h2 className='text-center text-3xl font-bold text-dark-gray tracking-wide'>Service Reviews</h2>
        <div>
          <CurrentServiceReviews></CurrentServiceReviews>
           <PostReviews></PostReviews>
        </div>
    </section>
  );
};

export default ReviewSection;