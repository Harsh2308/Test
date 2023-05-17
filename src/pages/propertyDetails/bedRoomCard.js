import React, { useState } from 'react';
import { Navigation } from "swiper";
import { BedRoomCardContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';

const breakpoints = {
  320: {
    spaceBetween: 12,
    slidesPerView: 2,
  },
  375: {
    spaceBetween: 16,
    slidesPerView: 2.3,
  },
  520: {
    spaceBetween: 16,
    slidesPerView: 2.4,
  },
  768: {
    spaceBetween: 16,
    slidesPerView: 2.4,
  },
  1024: {
    spaceBetween: 40,
    slidesPerView: 2.4,
  }
}

const Index = ({ sliderDetail, setBedroomTitle, setViewPhotosModalHandler }) => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function () {
    setWidth(window.innerWidth);
  });

  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={2.4}
      modules={[Navigation]}
      breakpoints={breakpoints}
      navigation={width > 520 ? true : false}
    >
      {sliderDetail?.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <BedRoomCardContainer
              onClick={() => {
                setBedroomTitle(item.title)
                setViewPhotosModalHandler(true)
              }}
            >
              <div className='bedroom'>
                <img src={item.imageFilePath} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.bedTypes[0].bedTypeQuantity} {item.bedTypes[0].bedType} bed</p>
            </BedRoomCardContainer>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Index