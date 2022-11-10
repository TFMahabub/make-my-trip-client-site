import React from 'react';
import UseTitle from '../../../Hook/UseTitle';
import Cart from './Cart';

const Services = () => {

  //dynamic title-
  UseTitle('Services')

  
  return (
    <section className='container mx-auto mt-8'>
      <Cart></Cart>
    </section>
  );
};

export default Services;