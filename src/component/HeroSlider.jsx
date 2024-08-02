import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[100vh]"
      >
        <SwiperSlide className='one'>
          <div className='ml-20 flex flex-col justify-center max-sm:ml-2' >
            <h1>Education </h1>
            <div>
            <span>INSPIRE. LEARN. GROW</span>
            </div>
            <p className='text-white my-10 text-xl'>At Little Scholars, we inspire, we learn, we grow</p>
            <div>
            <button>Get Enroll</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='two'>
        <div className=' flex flex-col justify-center mt-20 items-center max-sm:ml-1' >
            <h1>Education </h1>
            <div>
            <span>BRIGHT FUTURES BEGIN HERE</span>
            </div>
            <p className='text-white my-10 text-xl'>At Little Scholars: Bright Future Begins</p>
            <div>
            <button>Get Enroll</button>
            </div>
          </div>
          </SwiperSlide>
          
        <SwiperSlide className='three'>
        <div className='flex flex-col text-right mr-20 max-sm:text-left mt-20 m-2' >
            <h1>Education </h1>
            <div>
            <span>UNLOCK POTENTIAL</span>
            </div>
            <p className='text-white my-10 text-xl '>Little Scholars: Unlocking Every Child's Potential.</p>
            <div>
            <button>Get Enroll</button>
            </div>
          </div>
          </SwiperSlide>
        
      </Swiper>
    </>
  );
}
