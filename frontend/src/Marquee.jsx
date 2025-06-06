import React from 'react'
import { useNavigate } from 'react-router-dom'

const Marquee = () => {
    const navigate = useNavigate();
  return (
    <div className="overflow-hidden whitespace-nowrap py-3 flex items-center justify-between px-6">
      <div className="inline-block animate-marquee whitespace-nowrap">
        <span className="text-xl font-bold">This is a marquee text! &nbsp; &nbsp; &nbsp;</span>
      </div>
      <div className='flex flex gap-1'>
        <div>
          <p onClick={()=>navigate('/doctor')} className='text-red-500 animate-bounce cursor-pointer border-green-400 border-2 px-2 rounded-full'>Doctor Appointment</p>
        </div>
        <div className=''>
          <p onClick={()=>navigate('/video-consultancy')} className='text-sky-500 animate-bounce cursor-pointer border-green-400 border-2 px-2 rounded-full'>VideoConsultancy
            <span>DoctorAppointment</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Marquee
