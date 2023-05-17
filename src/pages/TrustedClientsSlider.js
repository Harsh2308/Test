import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const TrustedClientsSlider = ({ logos }) => {

  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={40}
      centeredSlides={false}
      breakpoints={{
        320: {
          spaceBetween: 14,
          slidesPerView: 3,
        },
        375: {
          spaceBetween: 12,
          slidesPerView: 3.2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1120: {
          slidesPerView: 6,
          spaceBetween: 40,
        }
      }}
      className="trusted-clients-slider"
    >
      {
        logos.map((logo, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='trusted-clients-slider_item' key={i} >
                {logo}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default TrustedClientsSlider