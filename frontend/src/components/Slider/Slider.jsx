import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import {   Autoplay, Pagination, Navigation } from 'swiper/modules';
import { assets } from '../../assets/assets';

const Slider = () => {
  return (
    <>
    <div className='Slider '>
        <div className='container !mt-2.5 '>
                    <Swiper 
               spaceBetween={30}
               centeredSlides={true}
               autoplay={{
                 delay: 2500,
                 disableOnInteraction: false,
               }}
               pagination={{
                 clickable: true,
               }}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                <SwiperSlide >
                    <img className='!rounded-2xl h-[385px] w-full' src={assets.banner1} alt='img'></img>

                </SwiperSlide>
                    <SwiperSlide>
                        <img className='!rounded-2xl ' src='https://img.lazcdn.com/us/domino/dc5a48f9-6710-4975-b3b3-185fd8ecbd41_BD-1976-688.jpg_2200x2200q80.jpg' alt='img2'></img>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                    <img className='!rounded-2xl' src='https://img.lazcdn.com/us/domino/4d43cb2c-6181-40f2-b089-ea65cfef3cb6_BD-1976-688.jpg_2200x2200q80.jpg' alt='img3'></img>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img className='!rounded-2xl' src='https://img.lazcdn.com/us/domino/e94c30de-0260-4a59-bb49-5aa17feb43ef_BD-1976-688.jpg_2200x2200q80.jpg' alt='img3'></img>
                    </SwiperSlide>
                    
                </Swiper>
        </div>

    </div>
  </>
  )
}

export default Slider
