import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section
    className='md:h-[520px]'
      >
      <div 
      className='flex flex-col-reverse md:flex-row lg:px-16 items-center justify-evenly md:justify-between container mx-auto h-[520px]'
      >
        <div className='md:max-w-xl text-center md:text-left'>
            <h3 
            className='text-lg md:text-2xl font-Montserrat font-semibold text-green'
            >
            Start your Journey with me
            </h3>
            <h2
            className='text-xl md:text-4xl font-Montserrat font-bold text-dark-gray mt-4 md:mt-0 tracking-wide'
            >
            Explore The Most <span className='text-green'>Attractive</span> Travel Places 
            with a Guide
            </h2>
          <div className='mt-7'>
            <Link 
            to = '/services'
            className=' bg-green hover:bg-dark-green px-6 py-3 text-[#fff] rounded-lg md:text-lg font-medium tracking-wide'
            >
            Start with a services
            </Link>
          </div>
        </div>


        <div className='hidden md:grid grid-cols-2 shadow-2xl md:max-w-sm hover:max-w-md ease-in-out duration-700'>
          <img className='p-2 bg-[#fff]' src="https://i.ibb.co/MMZ6669/banner-3.jpg" alt="" />
          <img className='p-2 bg-[#fff]' src="https://i.ibb.co/c6hcqHR/banner-2.jpg" alt="" />
          <img className='p-2 bg-[#fff]' src="https://i.ibb.co/zbsXkK4/banner-4.jpg" alt="" />
          <img className='p-2 bg-[#fff]' src="https://i.ibb.co/QXdtgz9/banner-5.jpg" alt="" />
        </div>



      </div>
    </section>
  );
};

export default Banner;