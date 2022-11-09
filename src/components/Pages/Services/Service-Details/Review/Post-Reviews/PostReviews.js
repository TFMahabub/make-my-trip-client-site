import React, { useState } from 'react';

const PostReviews = () => {
  const [rating, setRating] = useState(0)



  const handleOnSubmit = e =>{
    e.preventDefault()

    const form = e.target;
    const reviewText = form.reviewText.value;
    console.log(reviewText, rating);
  }

  return (
    <section className='mt-4'>
      <form onSubmit={handleOnSubmit} className='border border-green rounded-lg mx-auto max-w-xl p-6'>
        <h2 className='text-center text-xl font-semibold tracking-wide text-green'>Post a Reviews</h2>
          <h3 className='text-lg font-semibold text-green'>Select your rating:</h3>
        <div className='flex space-x-1 mt-2'>
          <h3 onClick={()=>setRating(1)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>1</h3>
          <h3 onClick={()=>setRating(2)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>2</h3>
          <h3 onClick={()=>setRating(3)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>3</h3>
          <h3 onClick={()=>setRating(4)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>4</h3>
          <h3 onClick={()=>setRating(5)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>5</h3>
        </div>
        <textarea className='border-0 focus:ring-green bg-[#e8fde8] w-full px-4 py-3 rounded-md mt-7 text-green tracking-wide' name="reviewText" id="" rows="10" placeholder='Enter your reviews'></textarea>
        <button type='submit' className='w-full py-2 text-[#fff] mt-3 rounded-md bg-green hover:bg-dark-green'>Submit</button>
      </form>
    </section>
  );
};

export default PostReviews;