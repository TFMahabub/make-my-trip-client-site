import React from 'react';
import ReviewSection from './Review/ReviewSection';
import ServicesDetails from './ServicesDetails';

const ServiceDetailsPage = () => {
  return (
    <div className='container mx-auto'>
      <ServicesDetails></ServicesDetails>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default ServiceDetailsPage;