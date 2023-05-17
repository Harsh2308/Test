import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { YatchesDetailPageStyledContainer } from './style';


const yacthslider = [
    {
        "id": "1",
        "image": "images/yacthDetailPageBg.png"
    },
    {
        "id": "2",
        "image": "images/yacthDetailPageBg.png"
    },
    {
        "id": "3",
        "image": "images/yacthDetailPageBg.png"
    },
    {
        "id": "4",
        "image": "images/yacthDetailPageBg.png"
    }
]




const yatchsDetail = () => {
    return (
        <YatchesDetailPageStyledContainer>
            <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                pagination={{
                    clickable: true,
                }}
                className="yatchDetailPageSlider"
            >
                {yacthslider.map((item) => {
                    return (
                        <SwiperSlide>
                            <img src={item.image} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>


            <div className='container yatchDetailPageContent' >
                <div className='yatchDetailPageContent_detail' >
                    <div className='yatchDetailPageContent_detail_wrapper' >
                        <div className='yatchDetailPageContent_detail_heading' >
                            <h1>Luxuri Yacht 82ft</h1>
                            <div className='yatchDetailPageContent_detail_heading_props' >
                                <div className='yatchDetailPageContent_detail_heading_props_prop' >
                                    <img src='images/whitecolorDot.svg' alt='whitecolorDot.svg' />
                                    <span>Miami location</span>
                                </div>
                                <div className='yatchDetailPageContent_detail_heading_props_prop' >
                                    <img src='images/whitecolorDot.svg' alt='whitecolorDot.svg' />
                                    <span>Bayliner Brand</span>
                                </div>
                                <div className='yatchDetailPageContent_detail_heading_props_prop' >
                                    <img src='images/whitecolorDot.svg' alt='whitecolorDot.svg' />
                                    <span>65 Guests</span>
                                </div>
                            </div>
                        </div>
                        <div className='yatchDetailPageContent_detail_desc' >
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa aliquam hendrerit aliquet aliquet. Nec suspendisse amet, et congue viverra ac amet. Mauris porta pellentesque ut egestas lorem id. Vitae sit tortor tortor morbi volutpat. Habitasse pharetra a amet, enim. Ipsum elit etiam velit, id pulvinar sagittis mauris donec. Mi odio augue cursus nisi Read More</p>
                        </div>
                    </div>
                    <div className='yatchDetailPageContent_detail_price' >
                        <div className='yatchDetailPageContent_detail_price_heading' >
                            <p>Price</p>
                            <h6>2 days: $12,000</h6>
                        </div>
                        <div className='yatchDetailPageContent_detail_price_props' >
                            <div className='yatchDetailPageContent_detail_price_props_prop' >
                                <img src='images/whitecolorDot.svg' alt='whitecolorDot.svg' />
                                <span>$12,000/2 days</span>
                            </div>
                            <div className='yatchDetailPageContent_detail_price_props_prop' >
                                <img src='images/whitecolorDot.svg' alt='whitecolorDot.svg' />
                                <span>$20,000/4 days</span>
                            </div>
                            <div className='yatchDetailPageContent_detail_price_props_prop' >
                                <img src='images/whitecolorDot.svg' alt='whitecolorDot.svg' />
                                <span>$35,000/6 days</span>
                            </div>
                        </div>
                    </div>

                    <div className='yatchDetailPageContent_detail_ammentities_container' >
                        <h1>Ammenities</h1>
                        <div className='yatchDetailPageContent_detail_ammentities_container_ammenities '  >
                            {
                                Array(9).fill(null).map((ammenti) => {
                                    return (
                                        <div className='yatchDetailPageContent_detail_ammentities_container_ammenities_ammeniti' >
                                            <img src='images/wifiAmmeniti.svg' alt='ok' />
                                            <p>{'Wifi'}</p>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className='yatchDetailPageContent_inquiriModal' ></div>
            </div>
        </YatchesDetailPageStyledContainer>
    )
}

export default yatchsDetail