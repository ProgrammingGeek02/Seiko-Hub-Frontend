import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom';
const Index = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    if(isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className='w-full'>
      <div className={`fixed top-0 left-0 h-full px-2 py-3 shadow-2xl ${isOpen ? 'close' : 'w-64'}`} id='sidebar'>
        <div className='relative mb-6' id='header'>

          <div className='flex'>

              <img
                src={`${process.env.PUBLIC_URL}/PubImg/D4C.png`}
                alt='D4C_Logo'
                className='w-12'
                id='logo_sidebar'
              />
           
            <div className='flex items-center mx-4'>
              <p className='text-base font-semibold text-gray-700 text-center' id='text'>SeikoHub</p>
            </div>
          </div>

          <i
            className='text-base text-center bx bx-right-arrow-alt absolute top-2/4 -right-6 -translate-y-2/4 w-6 h-6 text-white rounded-xl'
            id='arrow_button'
            onClick={toggle}
          ></i>
        </div>
        
        <div>
            <ul>

              <li className='w-full px-2 h-12 mt-3 list-none flex items-center'>
                <Link
                  to='#'
                  className={`transition ease-in-out delay-75 duration-200 rounded-lg flex items-center h-12 ${isOpen ? '': 'w-96 '} hover:bg-red-400 hover:text-white hover:scale-110`}
                >
                  <i className='bx bx-home text-lg px-1 mx-2 font-medium' ></i>
                  <p id='text' className='transition ease-in font-medium'>Home</p>
                </Link>
              </li>

              <li className='w-full px-2 h-12 mt-3 list-none flex items-center'>
                <Link
                  to='#'
                  className={`transition ease-in-out delay-75 duration-200 rounded-lg flex items-center h-12 ${isOpen ? '': 'w-96 '} hover:bg-red-400 hover:text-white hover:scale-110`}
                >
                  <i className='bx bx-user-check text-lg px-1 mx-2 font-medium'></i> 
                  <p id='text' className='transition ease-in font-medium'>Suscriptions</p>
                </Link>
              </li>

              <li className='w-full px-2 h-12 mt-3 list-none flex items-center'>
                <Link
                  to='#'
                  className={`transition ease-in-out delay-75 duration-200 rounded-lg flex items-center h-12 ${isOpen ? '': 'w-96 '} hover:bg-red-400 hover:text-white hover:scale-110`}  
                >
                  <i className='bx bx-compass text-lg px-1 mx-2 font-medium' ></i>
                  <p id='text' className='transition ease-in font-medium'>Explore</p>
                </Link>
              </li>

            </ul>

            <div className='w-full bg-red-400 my-4' style={{ height: '1.2px' }}></div>

            <ul>
              <li className='w-full px-2 h-12 mt-3 list-none flex items-center'>
                <Link
                  to='#'
                  className={`transition ease-in-out delay-75 duration-200 rounded-lg flex items-center h-12 ${isOpen ? '': 'w-96 '} hover:bg-red-400 hover:text-white hover:scale-110`}
                >
                  <i className='bx bx-history text-lg px-1 mx-2 font-medium' ></i>
                  <p id='text' className='transition ease-in font-medium'>History</p>
                </Link>
              </li>

              <li className='w-full px-2 h-12 mt-3 list-none flex items-center'>
                <Link
                  to='#'
                  className={`transition ease-in-out delay-75 duration-200 rounded-lg flex items-center h-12 ${isOpen ? '': 'w-96 '} hover:bg-red-400 hover:text-white hover:scale-110`}  
                >
                  <i className='bx bx-like text-lg px-1 mx-2 font-medium' ></i>
                  <p id='text' className='transition ease-in font-medium'>Liked</p>
                </Link>
              </li>

              <li className='w-full px-2 h-12 mt-3 list-none flex items-center'>
                <Link
                  to='#'
                  className={`transition ease-in-out delay-75 duration-200 rounded-lg flex items-center h-12 ${isOpen ? '': 'w-96 '} hover:bg-red-400 hover:text-white hover:scale-110`}
                >
                  <i className='bx bx-time-five text-lg px-1 mx-2 font-medium' ></i>
                  <p id='text' className='transition ease-in font-medium'>Watch Later</p>
                </Link>
              </li>
            </ul>

            <div className='w-full bg-red-400 my-4' style={{ height: '1.2px' }}></div>

            <ul>
              <p id='text' className='px-1 mx-2 transition ease-in font-medium'>SUBSCRIPTIONS</p>
              <li></li>
            </ul>

        </div>
        
      </div>

      <div className='h-screen' id='section'>
        <Outlet />
      </div>
      
    </div>
  )
}

export default Index;