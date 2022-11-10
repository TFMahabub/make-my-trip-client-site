import React, { useState } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import Rating0 from '../../Home/services-section/Ratings/Rating0';
import Rating4 from '../../Home/services-section/Ratings/Rating4';
import Rating45 from '../../Home/services-section/Ratings/Rating45';
import Rating5 from '../../Home/services-section/Ratings/Rating5';
import { toast } from 'react-toastify';
import UseTitle from '../../../../Hook/UseTitle';

const UpdateReview = () => {
  const { name, image, rating, title, reviewText, _id } = useLoaderData();
  const [editReviewText, setEditReviewText] = useState({reviewText: reviewText})
  
  
  //dynamic title-
  UseTitle('UpdateReview')

  const handleOnSubmit = (e) =>{
    fetch(`https://make-my-trip-server.vercel.app/reviews/update/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(editReviewText)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data?.modifiedCount > 0){
        toast.success('Review update successfully', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    })
  }



  const handleReviewOnBlur = e => {
    e.preventDefault()

    setEditReviewText({reviewText: e.target.value})
  }


  return (
    <section className='container mx-auto mt-10'>
      <h2 className='text-xl font-semibold text-green tracking-wide text-center'>Update Your Review</h2>
      <div className='mt-10 border flex flex-col justify-between border-[#e6e6e6] max-w-lg mx-auto shadow-lg rounded-lg p-6'>
        <div>
          <img className='w-14 h-14 rounded-full mx-auto' src={image? image : "https://i.ibb.co/QNd1bdZ/user.jpg"} alt="" />
          <h3 className='text-lg font-semibold tracking-wide text-center text-green'>{name}</h3>
            <div className="flex items-center space-x-1 justify-center">
                  {
                    rating === 0 && <Rating0></Rating0>
                  }
                  {
                    rating === 4 && <Rating4></Rating4>
                  }
                  {
                    rating === 4.5 && <Rating45></Rating45>
                  }
                  {
                    rating === 5 && <Rating5></Rating5>
                  }
                  <p className="text-light-gray font-medium">{rating}</p>
            </div>
          <h2 className='text-lg font-semibold text-light-gray text-center mt-2'>--- {title} ---</h2>
          <textarea onBlur={handleReviewOnBlur} className='border-0 focus:ring-green bg-[#e8fde8] w-full px-4 py-3 rounded-md mt-7 text-green tracking-wide' name="reviewText" id="" rows="8" defaultValue={reviewText} placeholder='Enter your reviews'></textarea>
          <button onClick={handleOnSubmit} className='mt-4 tracking-wider w-full text-[#fff] py-2 bg-green hover:bg-dark-green rounded-md'>Update</button>
        </div>
    </div>
    </section>
  );
};

export default UpdateReview;