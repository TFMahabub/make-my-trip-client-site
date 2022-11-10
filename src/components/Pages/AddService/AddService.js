import React, { useState } from 'react';
import UseTitle from '../../../Hook/UseTitle';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const AddService = () => {
  const [rating, setRating] = useState(0)

  const displayedServices = useLoaderData()
  console.log(displayedServices.length);

  //dynamic title-
  UseTitle('AddService')


  const handleOnSubmit = e =>{
    e.preventDefault()

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const description = form.description.value;
    const cost = form.cost.value;

    if(rating === 0){ 
      return toast.error('Please select your Rating', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });}

      //add service object-
      const postService = {
        img: image,
        title: title,
        rating: rating,
        price: cost,
        description: description,
        servicesId: displayedServices.length+1
      }
      console.log(postService);


      //reviews post to mongodb-
      fetch('https://make-my-trip-server.vercel.app/service', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postService)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          e.target.reset()
          toast.success('review add successfully', {
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





  /*
_id
6369c9dfbb748e76b2ac0df1
img
"https://i.ibb.co/Y7bGXQp/bus-services.jpg"
title
"Bus Transport Services"
rating
"4.5"
price
"20.00"
description
"Public transport services refer to the entire range of transport servi…"
servicesId
1
*/  
  return (
    <section className='container mx-auto mt-6'>
      <h2 className='text-2xl font-semibold tracking-wide text-green text-center'>Add a Service</h2>
      <form onSubmit={handleOnSubmit} className='max-w-md border border-green rounded-md mx-auto mt-4 p-4'>
        <div>
          <label className='block'>Image:</label>
          <input className='ring-1 ring-green px-3 py-1 w-full mt-1 rounded-sm' type="text" name='image' placeholder='Image url' required />
        </div>
        <div className='mt-3'>
          <label className='block'>Title:</label>
          <input className='ring-1 ring-green px-3 py-1 w-full mt-1 rounded-sm' type="text" name='title' placeholder='Service title' required />
        </div>
        <div className='mt-3'>
          <label className='block'>Description:</label>
          <input className='ring-1 ring-green px-3 py-1 w-full mt-1 rounded-sm' type="text" name='description' placeholder='Description' required />
        </div>
        <div className='mt-3'>
          <label className='block'>Cost:</label>
          <input className='ring-1 ring-green px-3 py-1 w-full mt-1 rounded-sm' type="number" name='cost' placeholder='Service cost' required />
        </div>
        <div className='mt-3'>
          <h3 className='text-lg font-semibold text-green'>Select your rating:</h3>
          <div className='flex space-x-1 mt-2'>
            <h3 onClick={()=>setRating(4)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>4</h3>
            <h3 onClick={()=>setRating(4.5)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>4.5</h3>
            <h3 onClick={()=>setRating(5)} className='bg-[#bfebbf] rounded-full font-semibold text-green w-10 h-10 cursor-pointer flex items-center justify-center'>5</h3>
          </div>
        </div>
        <button className='w-full py-2 bg-green hover:bg-dark-green tracking-wide mt-5 rounded-sm text-[#fff]'>Submit</button>
      </form>
    </section>
  );
};

export default AddService;