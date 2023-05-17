import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SimilarVillasContainer, ProductImagesSlider } from './style';

const Index = ({ sliderImages, viewImagesButton }) => {
    const sortedImagesByOrder = sliderImages?.sort((a, b) => (a.imageOrder > b.imageOrder) ? 1 : -1)

    return (
        <SimilarVillasContainer>
            <Swiper
                slidesPerView={1}
                spaceBetween={15}
                pagination={true}
                navigation={false}
                modules={[Pagination]}
                className='similarProductSlider'
            >
                {sortedImagesByOrder?.map((img, i) => {
                    if (i < 4)
                        return (
                            <SwiperSlide key={i}>
                                <ProductImagesSlider sliderImage={img.imageFilePath}>
                                    {i === 3 && viewImagesButton()}
                                </ProductImagesSlider>
                            </SwiperSlide>
                        )
                })}
            </Swiper>
        </SimilarVillasContainer >
    )
}

export default Index