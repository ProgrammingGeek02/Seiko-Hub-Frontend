import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Index() {

  const [IsActive, setIsActive] = useState(false);
  
  const showForm = () => {
    
    if(IsActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }

  }

  return (
    <div className=' w-full bg-gradient-to-r' id='fondo_index'>
      <div className='container h-screen md:mx-auto'>
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='w-2/4 lg:w-3/6 mx-auto mt-16'>
            <img src={`${process.env.PUBLIC_URL}/PubImg/D4C.png`} className='mx-auto first-letter:w-4/5' alt="D4C" />
          </div>
          <div className='w-full lg:w-3/6 mx-auto my-auto'>
            {
              IsActive ? (
                <Login />
              ) : (
                <>
                  <img src={`${process.env.PUBLIC_URL}/PubImg/Seiko_logo.png`} className='mx-auto w-4/5' alt="Seiko_logo" id='text-welcome'/>
                  <p className='text-xs lg:text-3xl w-full break-all font-semibold mt-5 text-center' id='text-welcome'>
                    In this place you can search, find, view & share videos for free.
                  </p>
                  <div className='flex mt-4'>
                    <button
                      type='button'
                      className='mx-auto w-32 text-center bg-transparent hover:bg-red-400 text-red-400 font-bold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded'
                      id='button_login'
                      onClick={showForm}
                    >
                      Login
                    </button>
                  </div>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const Login = () => {
  return(
    <div className='w-full max-w-xs mx-auto'>
      <form className='bg-white shadow-2xl overflow-hidden rounded px-8 pt-6 pb-8 mb-4' id='form_login'>
        <p className='text-center text-3xl font-bold my-5'>Login Form</p>

        <div className='mx-4 my-5 '>
          <label
            htmlFor='username'
            className='block text-gray-700 text-sm mb-2 font-bold'
          >
            Username
          </label>
          <input type="text" className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow' />
        </div>

        <div className='mx-4 my-5'>
          <label
            htmlFor='username'
            className='block text-gray-700 text-sm mb-2 font-bold'
          >
            Password
          </label>
          <input type="text" className='shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow' />
        </div>

        <div className='flex'>
          <button className='mx-auto w-56 bg-red-400 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
            Login
          </button>
        </div>

      </form>
    </div>
  )
}