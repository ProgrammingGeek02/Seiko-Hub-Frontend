import React, { useState } from 'react';
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
    <div className='h-screen w-full' id='fondo_index'>
      <div className='container lg:h-screen md:mx-auto'>
        <div className='flex flex-col lg:flex-row gap-6 lg:h-screen lg:my-auto'>
          <div className='w-2/4 lg:w-3/6 mx-auto lg:my-auto'>
            <img src={`${process.env.PUBLIC_URL}/PubImg/D4C.png`} className='mt-2 lg:mt-0 mx-auto w-4/5' alt="D4C" />
          </div>
          <div className='w-full lg:w-3/6 mx-auto lg:my-auto'>
            {
              IsActive ? (
                <Login isActive={setIsActive} />
              ) : (
                <>
                  <img src={`${process.env.PUBLIC_URL}/PubImg/Seiko_logo.png`} className='mx-auto w-4/5' alt="Seiko_logo" id='text-welcome'/>
                  <p className='text-xs lg:text-3xl w-full break-all font-semibold my-10 text-center' id='text-welcome'>
                    In this place you can search, find, view & share videos for free.
                  </p>
                  <div className='flex flex-col gap-y-5 mt-4'>
                    <button
                      type='button'
                      className='transition ease-in-out delay-75 mx-auto w-44 text-center bg-transparent hover:bg-red-400 text-white font-bold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded hover:-translate-y-1 hover:scale-110'
                      id='button_login'
                      onClick={() => setIsActive(true)}
                    >
                      Login
                    </button>
                    <button
                      type='button'
                      className='transition ease-in-out delay-75 mx-auto w-44 text-center bg-transparent hover:bg-red-400 text-white font-bold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded hover:-translate-y-1 hover:scale-110'
                      id='button_login'
                      onClick={showForm}
                    >
                      Register
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

const Login = ( { isActive }: any ) => {
  return(
    <div className='w-full max-w-xs mx-auto'>
      <form className='bg-white shadow-2xl overflow-hidden rounded px-8 pt-6 pb-8 mb-4' id='form_login'>
        <i
          className='bx bx-left-arrow-alt absolute text-2xl cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110'
          onClick={() => isActive(false)}
        ></i>
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
          <button className='transition ease-in-out delay-75 mx-auto w-56 bg-red-400 hover:bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:-translate-y-1 hover:scale-110' type='submit'>
            Login
          </button>
        </div>

      </form>
    </div>
  )
}