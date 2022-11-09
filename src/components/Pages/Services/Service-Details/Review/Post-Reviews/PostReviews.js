import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../../../Context/UserContext';

const PostReviews = () => {
  const [rating, setRating] = useState(0)
  // const [reviews, setReviews] = useState({})

  //login User-
  const { user } = useContext(AuthContext)
  const { displayName, email, photoURL } = user;

  //clicked services Id-
  const clickedService = useLoaderData()
  const { servicesId, _id } = clickedService;


  const handleOnSubmit = e =>{
    e.preventDefault()

    const reviewText = e.target.reviewText.value;
    if(rating ===0){ 
      return alert('Select your Rating')
    }
    const inputReviews = {
      serviceId: servicesId,
      name: displayName,
      image: photoURL,
      userEmail: email,
      rating: rating,
      reviewText: reviewText
    }



    //reviews post to mongodb-
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(inputReviews)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        e.target.reset()
        console.log(data);
      }
    })
  }

  return (
    <section className='mt-4'>
      <form onSubmit={handleOnSubmit} className='border border-green rounded-lg mx-auto max-w-xl p-6'>
        <h2 className='text-center text-xl font-semibold tracking-wide text-green'>Post a Reviews</h2>
          <h3 className='text-lg font-semibold text-green'>Select your rating:</h3>
        <div className='flex space-x-1 mt-2'>
          <h3 onClick={()=>setRating(4)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>4</h3>
          <h3 onClick={()=>setRating(4.5)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>4.5</h3>
          <h3 onClick={()=>setRating(5)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>5</h3>
        </div>
        <textarea className='border-0 focus:ring-green bg-[#e8fde8] w-full px-4 py-3 rounded-md mt-7 text-green tracking-wide' name="reviewText" id="" rows="10" placeholder='Enter your reviews' required></textarea>
        <button type='submit' className='w-full py-2 text-[#fff] mt-3 rounded-md bg-green hover:bg-dark-green'>Submit</button>
      </form>
    </section>
  );
};

export default PostReviews;