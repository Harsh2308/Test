import React, { useState } from 'react';
import DynamicModal from "common/galleryModal";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { YachtStyledBanner, ViewAllPhotosContainer } from './style';

const YachtBanner = ({ bannerImg, secondaryImages }) => {
    const [viewPhotosModalHandler, setViewPhotosModalHandler] = useState(false);

    return (
        <YachtStyledBanner bgImg={bannerImg}>
            <DynamicModal
                viewPhotosModalHandler={viewPhotosModalHandler}
                setViewPhotosModalHandler={setViewPhotosModalHandler}
            >
                <ViewAllPhotosContainer>
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation={true}
                        pagination={true}
                        modules={[Navigation, Pagination]}
                    >
                        {secondaryImages?.map((image) => {
                            return (
                                <SwiperSlide key={image.imageID}>
                                    <img src={image.imageFilePath} alt='imageFilePath' />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </ViewAllPhotosContainer>
            </DynamicModal>
            <button
                id='viewAllPhotosBtn'
                onClick={() => setViewPhotosModalHandler(true)}
            >
                View Photos
            </button>
        </YachtStyledBanner>
    )
}

export default YachtBanner