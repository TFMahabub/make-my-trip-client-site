import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating4 = () => {
  return (
    <div className='flex text-sm space-x-1 text-[#ffc710]'>
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStarFill />
      <BsStar />
    </div>
  );
};

export default Rating4;