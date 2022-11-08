import React from 'react';
import Address from './Address';
import HotLine from './HotLine';
import Time from './Time';

const Contact = () => {
  return (
    <div className='mt-16  rounded-lg'>
      <div className="bg-green md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
        <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
          <p className="text-base leading-normal text-center text-white mt-6">
            Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />a week on every friday so subscribe to get latest news and updates.
          </p>
          <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
            <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none" placeholder="Email Address" />
            <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
          </div>
      </div>
    </div>
  );
};

export default Contact;