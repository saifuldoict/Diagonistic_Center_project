import React, { useState } from 'react'
import { assets } from '../assets/assets'
import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
   
      <div className='flex items-center justify-between text-sm py-4 px-2 mb-5  bg-green-800 text-white font-bold'>
      <div>
      <img className='w-10 cursor-pointer' src={assets.logo}/>
      </div>
      <div >
          <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
              <li className="py-1">Home</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
              <li className="py-1">All Doctors</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
              <li className="py-1">About</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-3/5 m-auto hidden'/>
            </NavLink>
            
            <NavLink to='/gallery'>
              <li className="py-1">Gallery</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/news'>
              <li className="py-1">News</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/career'>
              <li className="py-1">Career</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/service'>
              <li className="py-1">Our Services</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-5/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
              <li className="py-1">Contact Us</li>
              <hr className='border-none outline-none h-0.5 bg-sky-500 w-5/5 m-auto hidden'/>
            </NavLink>
          </ul> 
          
      </div>
      <div className='flex items-center gap-4'>
        {
          token ?
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src={assets.profile}/>
            <img className='w-5' src={assets.down}/>
            <div className='absolute top0 right-0 pt-60 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')} className='hover: text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('my-appointments')} className='hover: text-black cursor-pointer'>My Appointments</p>
                <p onClick={()=>setToken(false)} className='hover: text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
          : <button onClick={()=>navigate('/login')} className='bg-white text-black font-bold px-8 py-3 rounded-full  hidden md:block'>Create Account</button>
        }
      
      </div>
      </div>
    
     
    
  )
}

export default Navbar