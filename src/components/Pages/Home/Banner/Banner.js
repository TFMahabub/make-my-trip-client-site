import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <section
    className='md:h-[520px] border'
      >
      <div 
      className='flex flex-col-reverse md:flex-row px-4 md:px-10 lg:px-10
                  items-center justify-evenly md:justify-between container mx-auto h-[520px]'
      >
        <div className='md:w-1/2 text-center md:text-left'>
          <h3 
          className='text-lg md:text-2xl font-Montserrat font-semibold text-green'
          >
          Start your Journey with us
          </h3>
          <h2
          className='text-xl md:text-4xl font-Montserrat font-bold text-dark-gray mt-4 md:mt-0 tracking-wide'
          >
          Explore The Most <span className='text-green'>Attractive</span> Travel Places
          </h2>
          <div className='mt-7'>
          <Link 
          to = '/courses'
          className=' bg-green hover:bg-dark-green px-6 py-3 text-[#fff] rounded-lg text-lg font-medium tracking-wide'
          >
          Start with a services
          </Link>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default Banner;