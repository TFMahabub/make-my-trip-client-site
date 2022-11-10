import React from 'react';
import UseTitle from '../../../Hook/UseTitle';
import Banner from './Banner/Banner';
import Contact from './ContactUs/Contact';
import HomeServices from './services-section/HomeServices';
import TopDestination from './TopDestination/TopDestination';

const Home = () => {
  //dynamic title-
  UseTitle('Home')
  return (
    <div className='container mx-auto '>
      <Banner></Banner>
      <HomeServices></HomeServices>
      <TopDestination></TopDestination>
      <Contact></Contact>
    </div>
  );
};

export default Home;