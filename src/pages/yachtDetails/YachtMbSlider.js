import React from 'react';
import { Pagination } from "swiper";
import { YachtMbStyledSlider } from './style';
import { Swiper, SwiperSlide } from "swiper/react";

const Index = ({ secondaryImages }) => {

    return (
        <YachtMbStyledSlider>
            <Swiper
                loop={true}
                pagination={true}
                modules={[Pagination]}
                className="yacht-slider"
                loopAdditionalSlides={secondaryImages?.length}
            >
                {secondaryImages?.map((image) => {
                    return (
                        <SwiperSlide key={image.imageID}>
                            <img src={image.imageFilePath} alt="yacht-slider" className='mob-img' />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </YachtMbStyledSlider >
    )
}

export default Index