import React from 'react';
import Banner from './Banner/Banner';
import Contact from './ContactUs/Contact';
import HomeServices from './services-section/HomeServices';
import TopDestination from './TopDestination/TopDestination';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <TopDestination></TopDestination>
      <Contact></Contact>
    </div>
  );
};

export default Home;