import React from 'react';

const Contact = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 mt-32'>
      <div>
        <img className='w-full' src="https://i.ibb.co/kVng4Vc/tour-guide.jpg" alt="" />
      </div>
      <div className='bg-[#39773e] p-16'>
        <h2 className='text-5xl font-bold text-[#fff] tracking-wider line'>Why Choose Me?</h2>
        <p className='text-lg mt-4 text-[#b8e7bc]'>There're many option you can see but I give you the best services and discount. Also you'll get more and more benefits explore my exiting services in this site</p>
        <div className='mt-12'>
          <h3 className='text-2xl font-semibold text-[#fff] tracking-wide'>Professional and Certified</h3>
          <p className='text-lg text-[#b8e7bc]'>I'm a govment certifird tour guide. I also get some awords for my greatest services. Don't miss the offer</p>
        </div>
        <div className='mt-12'>
          <h3 className='text-2xl font-semibold text-[#fff] tracking-wide'>Get Instant Tour Bookings</h3>
          <p className='text-lg text-[#b8e7bc]'>It's very easy to book my services just folow the direction of this website. It's very simple and easy</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;