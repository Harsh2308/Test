import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LuxuriCarsSliderContainer } from './style';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const carSlideImages = [
  "images/carimages/Lamborghini1.png",
  "images/carimages/Lamborghini2.png",
  "images/carimages/Lamborghini3.png",
  "images/carimages/Rolls-Royce.png",
];

const Index = () => {
  const history = useHistory()

  // const handleMouseMove = (e) => {
  //   cursorRef.current.style.left = `${e.clientX}px`;
  //   cursorRef.current.style.top = `${e.clientY}px`;
  // };

  return (
    <LuxuriCarsSliderContainer>
      <div className='container-xl'>
        <div className='car_heading' id='cars'>
          <h1>Luxuri Cars</h1>
        </div>
        <div>
          <Swiper
            effect={"coverflow"}
            loop={true}
            grabCursor={true}
            spaceBetween= {30}
            centeredSlides={true}
            slidesPerView={3.8}
            coverflowEffect={{
              rotate: 0,
              stretch: -80,
              depth: 200,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={false}
            modules={[EffectCoverflow, Pagination]}
            className="swiper-container"
            breakpoints={{
              350: {
                slidesPerView: 3
              },
              800: {
                coverflowEffect: {
                  stretch: -40,
                },
                slidesPerView: 2.5
              },
              1100: {
                coverflowEffect: {
                  stretch: -80,
                },
              }
            }}
          >
            {carSlideImages.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <img src={img} alt="car" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          </div>


        <div className='car_explore'>
          <button onClick={() => history.push('/luxury-car-rentals-miami')}>
            <p>Explore All</p>
            <img src='images/btnArrow.svg' alt='btnarrow' />
          </button>
        </div>
      </div>
    </LuxuriCarsSliderContainer>
  )
}

export default Index