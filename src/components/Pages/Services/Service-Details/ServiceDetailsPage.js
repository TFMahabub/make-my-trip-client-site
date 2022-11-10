import React from 'react';
import UseTitle from '../../../../Hook/UseTitle';
import ReviewSection from './Review/ReviewSection';
import ServicesDetails from './ServicesDetails';

const ServiceDetailsPage = () => {

  //dynamic title-
  UseTitle('ServiceDetails')
  return (
    <div className='container mx-auto'>
      <ServicesDetails></ServicesDetails>
      <ReviewSection></ReviewSection>
    </div>
  );
};

export default ServiceDetailsPage;