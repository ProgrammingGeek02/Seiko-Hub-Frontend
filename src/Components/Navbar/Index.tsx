import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Search } from '..';
interface Props {
  toggle: () => void;
}
const Index = ({ toggle }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    if(isNavOpen){
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }
  return (
    <div className='w-full h-16 shadow-2xl z-50' id='navbar'>
      <div className='flex bg-gray-50 justify-between px-8 w-full h-full flex-row items-center'>
        <div className='w-1/12'>
          <div className='flex items-center gap-3'>
            <i onClick={toggle} className='bx bx-menu text-xl cursor-pointer'></i>
            <img
              src={`${process.env.PUBLIC_URL}/PubImg/D4C.png`}
              alt='D4C_Logo'
              className='w-12'
            />
            <Link to='/home' className='text-lg font-medium'>SeikoHub</Link>
          </div>
        </div>
        <div className='w-2/4'>
          <Search />
        </div>
        <div >
          <div className='relative'>
            <img
              src={`${process.env.PUBLIC_URL}/PubImg/user/ben.png`}
              alt="user_image"
              className='border rounded-full w-9 cursor-pointer hover:border-black'
              onClick={openNav}
            />
            {
              isNavOpen ? (
                <div className='absolute w-52 bg-white/75 right-0'>
                  <ul className='my-3 mx-3'>
                    <li className='flex items-center my-2 cursor-pointer'>
                      <i className='bx bxs-user-badge mr-2'></i><p>My channel</p>
                    </li>
                    <li className='flex items-center my-2 cursor-pointer'>
                      <i className='bx bx-id-card mr-2'></i><p>Configuration</p>
                    </li>
                    <li className='flex items-center my-2 cursor-pointer'>
                      <i className='bx bx-moon mr-2' ></i><p>Theme</p>
                    </li>
                    <li className='flex items-center my-2 cursor-pointer'>
                      <i className='bx bx-log-out mr-2' ></i><p>Logout</p>
                    </li>
                  </ul>
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
