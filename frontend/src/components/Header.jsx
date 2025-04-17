import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-cols md:flex-wrap bg-[#147553] rounded-lg px-6 md:px-5 lg:px-10 h-[400px]'>
      {/*--left Side--*/}
      <div className='md:w-1/2 flex flex-col item-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:b-[30px]'>
        <p className='mt-2 text-3xl md:text-4xl lg:text-5xl text-white font-semibold '>Book Your Appointment<br className='hidden sm:block'/> With Our Expert Doctors</p>
        <Link className='mb-16 w-[200px] flex items-center gap-2  bg-white px-2 py-2 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href='#specialty'>
          Book Appointment <img className='w-5' src={assets.right}/>
        </Link>
      </div>
      {/*--Right Side--*/}
      
      <div className='md: w-1/2 relative'>
          <img className='w-full md:absolute  h-[60%] mt-9  rounded-lg' src={assets.banner}/>
      </div>
    </div>
  )
}

export default Header