import React, { useState } from 'react';
import SliderCard from 'common/sliderCard';
import { ChildVillaCard, SimilarVillasContainer } from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import "swiper/css/navigation"
import "swiper/css";
import "swiper/css/bundle";
import { useHistory, useLocation } from 'react-router-dom';

const Index = ({ sliderDetail, showDates }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const history = useHistory();
    const brokerId = localStorage.getItem("brokerId");
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const noOfGuest = query.get("noOfGuest");
    const checkInDate = query.get("checkInDate");
  const checkOutDate = query.get("checkOutDate");

    window.addEventListener('resize', function () {
        setWidth(window.innerWidth);
    });

    if (!sliderDetail) {
        return <div style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}>No Similar property available</div>
    }
    const navigateToPropertyDetails = (sliderDetail) => {
        let dsp = sliderDetail.dsp;
        let city = sliderDetail.location;
        const locationId = sliderDetail.locationID;
        const selectedPropertyID = sliderDetail.propertyID;
        const propertyFriendlyName = sliderDetail.propertyFriendlyName.replaceAll(
          " ",
          "-"
        );
    
        if (city === "Miami") {
          city = "miami-vacation-homes";
        } else if (city === "Aspen") {
          city = "aspen-vacation-homes";
        } else {
          city = "fort-lauderdale-vacation-homes";
        }
        history.push({
          pathname: `/property-details/${city}/${propertyFriendlyName}`,
          search: ``,
          state: { brokerId, selectedPropertyID, dsp, locationId },
        });
      };

    return (
       <SimilarVillasContainer>
            <Swiper
                spaceBetween={24}
                slidesPerView={3.4}
                modules={[Navigation]}
                className='similarProductSlider'
                navigation={width > 520 ? true : false}
                breakpoints={{
                    320: {
                        spaceBetween: 12,
                        slidesPerView: 1,
                        slidesPerGroup: 1
                    },
                    375: {
                        spaceBetween: 8,
                        slidesPerView: 1.06,
                        centeredSlides: false,
                        slidesPerGroup: 1
                    },
                    520: {
                        slidesPerView: 1.5,
                        slidesPerGroup: 1
                    },
                    768: {
                        slidesPerView: 2.2,
                        slidesPerGroup: 2
                    },
                    1024: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1100: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    1200: {
                        slidesPerView: 3.3,
                        slidesPerGroup: 3
                    },
                }}
            >
                {sliderDetail?.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <ChildVillaCard>
                                <SliderCard clicked={navigateToPropertyDetails} class="updateClass" sliderDetail={item} max="380px" showDates={showDates} />
                            </ChildVillaCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </SimilarVillasContainer>

    )
}

export default Index