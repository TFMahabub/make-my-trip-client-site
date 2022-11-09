import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Rating4 from "../Home/services-section/Ratings/Rating4";
import Rating45 from "../Home/services-section/Ratings/Rating45";
import Rating5 from "../Home/services-section/Ratings/Rating5";
//react-photo-viewer-
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleCart = ({service}) => {
  const { _id, img, title, description, price, rating, servicesId, } = service;

  return (
    <div className='border border-[#dadada] p-3 md:p-4 rounded-lg shadow-lg'>
        <div>
        <PhotoProvider>
          <PhotoView src={img}>
            <img className='rounded-lg' src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
          <div className='flex items-center justify-between mt-3'>
            <h3 className='text-xl text-dark-gray font-semibold'>{title}</h3>
            <div className="flex items-center space-x-1">
              {
                rating === "4.0" && <Rating4></Rating4>
              }
              {
                rating === "4.5" && <Rating45></Rating45>
              }
              {
                rating === "5" && <Rating5></Rating5>
              }
              <p className="text-light-gray font-medium">{rating}</p>
            </div>
          </div>
          <p className='text-light-gray mt-1'><span>{description.slice(0, 200)+'...'}</span></p>
        </div>
        <div className='flex items-center justify-between mt-4'>
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