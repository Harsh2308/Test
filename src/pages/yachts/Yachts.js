import React, { useState, useEffect, useRef } from "react";
import { getYachts } from "./apis";
import FleetForm from "./FleetForm";
import YachtBanner from "./YachtBanner";
import YachtSlideContent from "./YachtSlider";
import Skeleton from "@mui/material/Skeleton";
import InquiryModal from "common/inquiryModal";
import { Navigation, Pagination } from "swiper";
import YachtRangeSlider from "./YachtRangeSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { YachtsPage, YachtSecretFleet } from "./style";

const breakpoints = {
  320: {
    spaceBetween: 16,
    slidesPerGroup: 1,
    slidesPerView: 1.2,
  },
  520: {
    spaceBetween: 16,
    slidesPerGroup: 1,
    slidesPerView: 1.5,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,
  },
  1024: {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
  1200: {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
  1280: {
    slidesPerView: 3,
  },
};

const Index = () => {
  const swiperRef = useRef(null);
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [swiper, setSwiper] = useState(null);
  const [yachtMain, setYachtMain] = useState(null);
  const brokerId = localStorage.getItem("brokerId");
  const [yachtOrder, setYachtOrder] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [value, setValue] = useState(null);
  // console.log(yachtMain)

  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  });

  // const handleSlide = (direction) => {
  //   if (swiperRef.current) {
  //     const currentIndex = swiperRef.current.activeIndex;
  //     const nextIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
  //     swiperRef.current.slideTo(nextIndex);
  //   }
  // };
  useEffect(() => {
    if (swiper) swiperRef.current = swiper;
    getYachts(brokerId)
      .then((res) => {
        const sortedYachts = res.data.Data?.sort((a, b) =>
          a.totalFeet > b.totalFeet ? 1 : -1
        );
        setMin(sortedYachts[0].totalFeet);
        setMax(sortedYachts[sortedYachts.length - 1].totalFeet);
        setYachtMain(sortedYachts);
        setYachtOrder(res.data.Data);
      })
      .catch((error) => console.log(error));

    return () => {
      setYachtMain(null);
      setYachtOrder(null);
    };
  }, [swiper, brokerId]);

  useEffect(() => {
    if (value) {
      const filterData = yachtMain.filter((item) => item.totalFeet >= value);
      setYachtOrder(filterData);
    }
  }, [value]);

  const getFilterValue = (value) => {
    setValue(value);
  };

  return (
    <YachtsPage>
      {inquiryModalOpen ? (
        <InquiryModal
          name=""
          size="48"
          mbSize="35.5"
          form={<FleetForm />}
          title="Access Secret Fleet"
          bg="images/yacthPageBG.png"
          inquiryModalOpen={inquiryModalOpen}
          // bg="images/yachtimages/fleetYacht.png"
          setInquiryModalOpen={setInquiryModalOpen}
        />
      ) : null}
      <YachtBanner />

      <div className="yachtPage_container">
        <YachtRangeSlider
          min={min}
          max={max}
          yachtMain={yachtMain}
          swiperRef={swiperRef}
          getFilterValue={getFilterValue}
          // setYachtOrder={setYachtOrder}
        />
        <div className="yachtPage_container_swiper-slider">
          <Swiper
            ref={swiperRef}
            spaceBetween={40}
            slidesPerGroup={3}
            onSwiper={setSwiper}
            breakpoints={breakpoints}
            modules={[Navigation, Pagination]}
            navigation={width > 768 ? true : false}
            allowTouchMove={width > 768 ? false : true}
          >
            {!yachtOrder
              ? Array(5)
                  .fill(null)
                  .map((slide, i) => {
                    if (i < 10) {
                      return (
                        <SwiperSlide key={i}>
                          <Skeleton
                            width="100%"
                            height={470}
                            variant="rectangular"
                            sx={{ bgcolor: "#303030" }}
                          />
                        </SwiperSlide>
                      );
                    }
                  })
              : yachtOrder.map((item, index) => {
                  return (
                    <SwiperSlide key={index + 1}>
                      <YachtSlideContent data={item} />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
        </div>
      </div>

      <YachtSecretFleet>
        <div className="content">
          <p>Can't find the yacht you are looking for ?</p>
          <button onClick={() => setInquiryModalOpen(true)}>
            Access Secret Fleet
            <img
              style={{ marginLeft: "12px" }}
              src="images/arrow-right.svg"
              alt="arrow-right"
            />
          </button>
        </div>
      </YachtSecretFleet>
    </YachtsPage>
  );
};

export default Index;
