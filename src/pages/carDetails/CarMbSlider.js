import React from "react";
import { Pagination } from "swiper";
import { CarMbStyledSlider } from "./style.js";
import { Swiper, SwiperSlide } from "swiper/react";

const Index = ({ secondaryImages }) => {

  return (
    <CarMbStyledSlider>
      <Swiper
        loop={true}
        slidesPerView={1}
        pagination={true}
        className="car-slider"
        modules={[Pagination]}
        loopAdditionalSlides={secondaryImages?.length}
      >
        {secondaryImages?.map((image) => {
          return (
            <SwiperSlide key={image.imageID}>
              <img src={image.imageFilePath} alt="car-slider" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CarMbStyledSlider>
  );
};

export default Index;