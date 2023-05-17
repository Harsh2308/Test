import React, { useState } from 'react';
import GalleryModal from "common/galleryModal";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarStyledBanner, ViewAllPhotosContainer } from './style';

const Index = ({ bannerImg, secondaryImages }) => {
    const [viewPhotosModalHandler, setViewPhotosModalHandler] = useState(false);

    return (
        <CarStyledBanner bgImg={bannerImg}>
            <GalleryModal
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
            </GalleryModal>
            <button
                id='viewAllPhotosBtn'
                onClick={() => setViewPhotosModalHandler(true)}
            >
                View Photos
            </button>
        </CarStyledBanner>
    )
}

export default Index