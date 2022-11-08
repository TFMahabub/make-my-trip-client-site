import React from 'react';
import { AiOutlineFieldTime } from "react-icons/ai";

const Time = () => {
  return (
    <div className='flex items-center md:justify-between'>
        <AiOutlineFieldTime className='text-green text-5xl'></AiOutlineFieldTime>
        <div className='text-[#fff] ml-2'>
          <p>We are open monday-friday</p>
          <h3 className='text-2xl'>7:00 am - 9:00 pm</h3>
        </div>
      </div>
  );
};

export default Time;