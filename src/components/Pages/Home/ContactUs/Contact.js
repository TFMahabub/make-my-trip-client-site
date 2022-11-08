import React from 'react';
import Address from './Address';
import HotLine from './HotLine';
import Time from './Time';

const Contact = () => {
  return (
    <div className='mt-16 md:flex items-center justify-evenly p-8 bg-dark-gray rounded-lg'>
      <Time></Time>
      <HotLine></HotLine>
      <Address></Address>
    </div>
  );
};

export default Contact;