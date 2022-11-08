import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SingleCart = ({service}) => {
  const { _id, img, title, description, price, rating, servicesId, } = service;

  return (
    <div className='border border-[#dadada] p-3 md:p-4 rounded-lg flex flex-col justify-between shadow-lg'>
        <div>
          <img className='rounded-lg' src={img} alt="" />
          <h3 className='text-xl text-dark-gray font-semibold mt-2'>{title}</h3>
          <p className='text-light-gray'><span>{description}</span></p>
        </div>
        <div className='flex items-center justify-between mt-2'>
          <h4 className='text-lg font-semibold text-light-gray'>Cost: <span className='text-green'>${price}</span> </h4>
          <Link to={`/service/${servicesId}`} className='flex items-center border border-green px-3 py-1 rounded-md hover:bg-light-green text-light-gray font-medium'>
            Details
            <AiOutlineArrowRight className='text-lg text-green ml-1' />
          </Link>
        </div>
      
    </div>
  );
};

export default SingleCart;