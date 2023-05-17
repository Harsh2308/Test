import React, { useState } from "react";
import { Navigation } from "swiper";
import { urlData } from 'common/urlData';
import Skeleton from "@mui/material/Skeleton";
import LocationCard from "common/locationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useHistory } from "react-router-dom";

const Index = ({ title, route = '#', sliderData }) => {
  const history = useHistory()
  const { startDate, endDate } = urlData;
  const brokerId = localStorage.getItem('brokerId')
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  })

  const getImageByOneOrder = (slide) => {
    const order = slide.matchedInquirySecondaryImages?.find((image) => image.imageOrder === 1);
    return order ? order.imageFilePath : null;
  }

  const handlePropertyNavigate = (sliderDetail) => {
    let cityName = sliderDetail.city
    let locationId = sliderDetail.locationID;
    let maxAllowedGuests = sliderDetail.maxAllowedGuests
    let selectedPropertyID = sliderDetail.propertyID
    let dsp = sliderDetail.dsp
    let propertyFriendlyName = sliderDetail.propertyFriendlyName.replaceAll(" ", "-")

    if (cityName === 'Miami') { cityName = 'miami-vacation-homes' }
    else if (cityName === "Aspen") { cityName = 'aspen-vacation-homes' }
    else { cityName = 'fort-lauderdale-vacation-homes' }
    history.push({
      pathname: `/property-details/${cityName}/${propertyFriendlyName}`,
      search: `?noOfGuest=${maxAllowedGuests}&checkInDate=${startDate}&checkOutDate=${endDate}&selectedPropertyID=${selectedPropertyID}&dsp=${dsp}&locationId=${locationId}`,
      state: { brokerId, selectedPropertyID, dsp, locationId },
    })
  }

  return (
    <div className="location_slider">
      <div className='location_slider_container location_slider_heading'>
        <h1>{title}</h1>
        <Link
          className="location_slider_link"
          to={{
            pathname: `/${route}`,
            state: { flexible: false, value: null }
          }}
        >
          See All
        </Link>
      </div>
      <div className='location_slider_section'>
        <Swiper
          spaceBetween={24}
          slidesPerGroup={3}
          modules={[Navigation]}
          navigation={width > 520 ? true : false}
          pagination={{ clickable: true, type: "fraction" }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
              slidesPerGroup: 1,
            },
            375: {
              spaceBetween: 16,
              slidesPerGroup: 1,
              slidesPerView: 1.45,
            },
            425: {
              spaceBetween: 16,
              slidesPerGroup: 1,
              slidesPerView: 1.4,
            },
            520: {
              spaceBetween: 16,
              slidesPerGroup: 1,
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.25,
            },
          }}
          className='mySwiper'>
          <>
            {!sliderData?.length
              ? Array(6)
                .fill(null)
                ?.map((slide, i) => {
                  if (i < 10) {
                    return (
                      <SwiperSlide key={i}>
                        <Skeleton
                          width='100%'
                          height={250}
                          variant='rectangular'
                          sx={{ bgcolor: "#303030" }}
                        />
                      </SwiperSlide>
                    );
                  }
                })
              : sliderData?.map((slide, i) => {
                return (
                  <SwiperSlide key={i} onClick={() => handlePropertyNavigate(slide)} >
                    <LocationCard
                      guest={slide.maxAllowedGuests}
                      img={getImageByOneOrder(slide)}
                      bedroom={slide.numberOfBedrooms}
                      title={slide.propertyFriendlyName}
                    />
                  </SwiperSlide>
                );
              })}
          </>
        </Swiper>
      </div>
    </div>
  );
};

export default Index;