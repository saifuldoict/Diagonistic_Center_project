import React from 'react'
import { specialData } from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecialtyMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 text-gray-800' id='specialty'>
      <h1 className='text-3xl font-medium'>Find Doctor</h1>
      <p className='sm:1/3 text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minima libero! Deserunt minus eveniet dignissimos earum recusandae deleniti omnis delectus!</p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {
          specialData.map((item, index)=>(
              <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors ${item.specialist}`}>
                <img className='w-1 sm:w-24 mb-2' src={item.image}/>
                <p>{item.specialist}</p>

              </Link>
          ))}
      </div>

    </div>
  )
}

export default SpecialtyMenu