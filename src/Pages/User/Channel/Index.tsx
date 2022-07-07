import React from 'react';
export default function Index() {
    const text = 'Tyler1: When Top gap is so large that the enemy Jungler goes AFK';
  return (
    <div className='w-full h-48 bg-gray-100 z-10'>
        <div className='flex w-full h-full items-center justify-center'>
            <div className='relative'>
                <img
                    src={`${process.env.PUBLIC_URL}/PubImg/user/ben.png`}
                    alt="User_profile"
                    className='w-28 rounded-full'
                />
         
                <div className='flex flex-col'>
                    <p className='text-center my-2 font-semibold text-gray-500'>0 followers</p>
                    {/* <button className='text-blue-600 font-medium' type='button'>
                        <i className='bx bx-plus-medical text-xs mr-1'></i>follow
                    </button> */}
                </div>
            </div>
        </div>

        <div className='w-full h-10 bg-gray-100 shadow-xl'>
            <div className='flex flex-row gap-6 justify-center'>
                <p className='transition-all ease-in border-b-0 font-medium hover:text-red-400 duration-75 cursor-pointer hover:border-b-2 hover:border-red-400'>Index</p>
                <p className='transition-all ease-in border-b-0 font-medium hover:text-red-400 duration-75 cursor-pointer hover:border-b-2 hover:border-red-400'>Videos</p>
                <p className='transition-all ease-in border-b-0 font-medium hover:text-red-400 duration-75 cursor-pointer hover:border-b-2 hover:border-red-400'>Reproduction list</p>
                <p className='transition-all ease-in border-b-0 font-medium hover:text-red-400 duration-75 cursor-pointer hover:border-b-2 hover:border-red-400'>Channels</p>
            </div>
        </div>

        <div className='container my-6 px-24' id='video-content-channel'>
            <div className='flex flex-col flex-wrap lg:flex-row gap-4'>
                {/* <div className='w-64'>
                    <video className='h-32'>
                        <source src={`${process.env.PUBLIC_URL}/PubImg/ga.mp4`} />
                        
                    </video>
                    <p className='font-medium mt-1 text-sm w-56'>{text.length > 54 ? `${text.substring(0, 54)}...` : text}</p>
                    <p className='text-gray-500 text-xs mt-3'>0 vistas * hace 1 hora</p>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

const videoSection = () => {
    return (
        <div>
            video section
        </div>
    )
}