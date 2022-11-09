import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import logo from '../../../Images/logo/logo.png'

const Nav = () => {
  const [state, setState] = useState(false)
  const { user, signOutUser } = useContext(AuthContext)

    
  const handleSignOut = () =>{
    signOutUser()
    .then(err => console.error(err))
  }
  const navigation = [
      { title: "Home", path: "/" },
      { title: "Services", path: "/services" },
      { title: "My reviews", path: "/my_reviews"},
      { title: "Add service", path: "/add_service"},
      { title: "Blog", path: "/blog" }
  ]

  return (
    <nav className="bg-white container mx-auto">
          <div className="items-center px-2 md:flex md:px-0">
              <div className="flex items-center justify-between py-3 md:block">
                    <Link to='/'>
                        <img
                            src={logo}
                            className='h-10 md:h-14'
                            alt="car_doctor"
                        />
                    </Link>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className="font-medium text-lg text-dark-gray hover:text-green">
                                    <a href={item.path}>
                                        { item.title }
                                    </a>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
              
              <div className="hidden md:flex">
                {
                    user?.photoURL &&
                    <img className='w-10 h-10 rounded-full mr-3' src={user?.photoURL} alt="" />
                }
                {
                    user?.uid?
                    <button 
                    onClick={handleSignOut}
                    className="py-2 px-6 font-medium hover:text-[#fff] border border-green hover:bg-green rounded-md">
                        Sign out
                    </button>
                    :
                    <button className="py-2 px-6 font-medium hover:text-[#fff] border border-green hover:bg-green rounded-md">
                        <Link to={'/login'} >
                            Log In
                        </Link>
                    </button>
                }
              </div>
          </div>
      </nav>
  );
};

export default Nav;