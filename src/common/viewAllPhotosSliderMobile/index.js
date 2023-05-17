import React from 'react'
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { ViewAllPhotosSliderMobileContainer } from './style';
import { ModalCrossIcon } from '../galleryModal/style';

const Index = ({ showCaseImage, setCustomIcon, setViewPhotosModalHandler }) => {

    function closeModal() {
        setViewPhotosModalHandler(false);
        setCustomIcon(false);
    }

    const uniqueTitlesArray = [...new Set(showCaseImage?.map((item) => item.title))];

    const newArray = uniqueTitlesArray.map((title) => {
        return {
            title: title,
            images: showCaseImage
                .filter((item) => item.title === title)
                .map((item) => {
                    return {
                        imageFilePath: item.imageFilePath
                    }
                }),
        };
    });

    return (
        <ViewAllPhotosSliderMobileContainer>
            <div className='viewAllPhotosSliderMobile_heading'>
                <ModalCrossIcon>
                    <img onClick={closeModal} src='images/crossIcon.svg' alt='crossIcon' />
                </ModalCrossIcon>
                <h1>Villa Layout</h1>
            </div>
            <div className='viewAllPhotosSliderMobile_layout'>
                {newArray?.map((item, i) => {
                    return (
                        <div key={item.title} className='viewAllPhotosSliderMobile_layout_slider'>
                            <p>{item.title}</p>
                            <Swiper
                                slidesPerView={1}
                                navigation={true}
                                pagination={true}
                                modules={[Navigation, Pagination]}
                            >
                                {item.images?.map((img, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <div className='images' style={{ maxHeight: '204px' }}>
                                                <img src={img.imageFilePath} alt='img' />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    )
                })}
            </div>
        </ViewAllPhotosSliderMobileContainer>
    )
}

export default Index