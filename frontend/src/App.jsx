import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Career from './pages/Career'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Doctors from './pages/Doctors'
import Gallery from './pages/Gallery'
import Login from './pages/Login'
import Logout from './pages/Logout'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'

import Navbar from './components/Navbar'
import News from './pages/News'
import OurServices from './pages/OurServices'
import Marquee from './Marquee'
import SampleCollectionFromHome from './pages/SampleCollectionFromHome'
import VideoConsultancyDoctorAppointment from './pages/VideoConsultancyDoctorAppointment'

function App() {
  

  return (
  
      <div className='mx-4 sm:mx-[10%]'>
        <Marquee/>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career/>} />
        <Route path='/doctors: specialty' element={<Doctors/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appointments' element={<MyAppointments/>}/>
        <Route path='/appointment/:docId' element={<Appointment/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/service' element={<OurServices/>}/>
        <Route path='/sample-collection' element={<SampleCollectionFromHome/>}/>
        <Route path='/video-consultancy' element={<VideoConsultancyDoctorAppointment/>}/>


       </Routes>
       
      </div>
      
    
  )
}

export default App
