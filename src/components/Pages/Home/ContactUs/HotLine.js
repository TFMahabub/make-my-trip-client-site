import React from 'react';
import { FiPhoneCall } from "react-icons/fi";

const HotLine = () => {
  return (
    <div className='flex items-center md:justify-between my-6 md:my-0'>
        <FiPhoneCall className='text-green text-4xl'></FiPhoneCall>
        <div className='text-[#fff] ml-2'>
          <p>Have a question?</p>
          <h3 className='text-2xl'>+2546 251 2658</h3>
        </div>
    </div>
  );
};

export default HotLine;