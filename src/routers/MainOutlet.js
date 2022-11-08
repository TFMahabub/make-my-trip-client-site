import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/sheared-components/footer/Footer';
import Nav from '../components/sheared-components/navbar/Nav';

const MainOutlet = () => {
  return (
    <div>
      <div className='px-2 md:px-0'>
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainOutlet;