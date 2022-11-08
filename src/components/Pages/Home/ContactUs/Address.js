import React from 'react';
import { GoLocation } from "react-icons/go";

const Address = () => {
  return (
    <div className='flex items-center md:justify-between'>
      <GoLocation className='text-green text-4xl'></GoLocation>
      <div className='text-[#fff] ml-2'>
        <p>Need a repair? our address</p>
        <h3 className='text-2xl'>Liza Street, New York</h3>
      </div>
    </div>
  );
};

export default Address;