import React, { useState } from "react";
import moment from "moment";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiderCardContainer, SliderImageContainer } from "./style";

const Index = ({ sliderDetail, max, clicked = null, showDates }) => {
  const startDate = moment(sliderDetail.startDate).format("MMM DD");
  const endDate = moment(sliderDetail.endDate).format("MMM DD");
  const [showArrows, setShowArrows] = useState(false);
  const dateString = `${startDate} to ${endDate}`;

  return (
    <SiderCardContainer
      max={max}
      onMouseEnter={() => setShowArrows(!showArrows)}
      onMouseLeave={() => setShowArrows(!showArrows)}
    >
      <Swiper
        pagination={true}
        modules={[Navigation, Pagination]}
        navigation={showArrows ? true : false}
      >
        {sliderDetail.matchedInquirySecondaryImages?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderImageContainer sliderImage={item.imageFilePath}>
                {sliderDetail.displayWebMinimumNights === 1 && (
                  <div className="space_slider_image_container_badge">
                    <p>{sliderDetail.minimumNightStay}+ nights only</p>
                  </div>
                )}
                <div className="space_slider_image_container_heading">
                  <h3>{showDates ? dateString : ""}</h3>
                </div>
              </SliderImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="spaceCard_detail">
        <h2>{sliderDetail.propertyFriendlyName}</h2>
        <div className="spaceCard_detail_card">
          <div className="spaceCard_detail_card_package">
            <p>
              Starting at{" "}
              <span>
                ${sliderDetail.minimumNightlyPrice?.toLocaleString("en-US")}
                <span> /night</span>
              </span>
            </p>
            <div className="spaceCard_detail_card_package_service">
              <div className="spaceCard_detail_card_package_service_one">
                <img
                  style={{ width: "5px" }}
                  src="images/SearchDotsdots.svg"
                  alt="images/SearchDotsdots.svg"
                />
                <p>{sliderDetail.numberOfBedrooms} Bedrooms</p>
              </div>
              <div className="spaceCard_detail_card_package_service_two">
                <img
                  style={{ width: "5px" }}
                  src="images/SearchDotsdots.svg"
                  alt="images/SearchDotsdots.svg"
                />
                <p>{sliderDetail.maxAllowedGuests} Guests</p>
              </div>
            </div>
          </div>
          <div className="spaceCard_detail_card_btn">
            <button onClick={() => clicked(sliderDetail)}>View Details</button>
          </div>
        </div>
      </div>
    </SiderCardContainer>
  );
};

export default Index;
