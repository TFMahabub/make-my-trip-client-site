import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import UseTitle from '../../../Hook/UseTitle';
import SingleCart from './SingleCart';

const MyReviews = () => {
  const { user , signOutUser } = useContext(AuthContext)
  const [myReviews, setMyReviews] = useState([]);

  //dynamic title-
  UseTitle('MyReviews')

 
  useEffect(()=>{
    fetch(`https://make-my-trip-server.vercel.app/reviews?email=${user?.email}`,{
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      if (res.status === 401 || res.status === 403) {
          return signOutUser()
      }
      return res.json()
  })
    // .then(res => res.json())
    .then(data => setMyReviews(data))
  },[])

  //delete reviews-
  const deleteFromUi = _id =>{
    const remainingReviews = myReviews.filter(rvw => rvw._id !== _id)
    setMyReviews(remainingReviews)
  }

  
  return (
    <div>
      <h2 className='text-2xl font-semibold tracking-wide text-center mt-6 text-green'>My Reviews</h2>
      {
        myReviews?.length === 0?
        <h2 className='my-24 text-xl text-center text-[#f38585] font-semibold'>There has no reviews :(</h2>
        :
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-12 md:gap-y-0 mb-24 container mx-auto'>
          {
            myReviews.map(review => <SingleCart key={review?._id} review = {review} deleteFromUi={deleteFromUi}></SingleCart>)
          }
        </div>
      }
      
    </div>
  );
};

export default MyReviews;