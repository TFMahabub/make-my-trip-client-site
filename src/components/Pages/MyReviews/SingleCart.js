import React from 'react';
import Rating0 from '../Home/services-section/Ratings/Rating0';
import Rating4 from '../Home/services-section/Ratings/Rating4';
import Rating45 from '../Home/services-section/Ratings/Rating45';
import Rating5 from '../Home/services-section/Ratings/Rating5';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SingleCart = ({review, deleteFromUi}) => {
  const { name, image, rating, title, reviewText, _id, reviewDate } = review;


  //delete review item-
  const handleDelete = _id =>{
    if(window.confirm("Do you want to delete the review") == true){
      fetch(`https://make-my-trip-server.vercel.app/reviews/${_id}`, {method: "DELETE"})
      .then(res=>res.json())
      .then(data=>{
        if(data?.deletedCount > 0){
          toast.success('Delete Review successfully', {
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
    deleteFromUi(_id)
    }
  }



  return (
    <div className='mt-10 border flex flex-col justify-between border-[#e6e6e6] shadow-lg rounded-lg p-6'>
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
            <p className='text-dark-gray text-center'>{reviewDate}</p>
          <h2 className='text-lg font-semibold text-light-gray text-center mt-2'>--- {title} ---</h2>
          <p className='text-light-gray mt-2'>{reviewText.slice(0, 70)}</p>
        </div>
        <div className='flex items-center justify-between mt-6'>
          <button onClick={()=>handleDelete(_id)} className='font-medium text-sm text-dark-gray tracking-wide px-3 py-1 bg-[#ff8282] hover:bg-[#ff6464] rounded-md'>Delete</button>
          <Link to= {`/my_reviews/update/${_id}`}>
            <button className='font-medium text-sm text-dark-gray tracking-wide px-3 py-1 bg-green hover:bg-green rounded-md'>Edit</button>
          </Link>
        </div>
    </div>
  );
};

export default SingleCart;