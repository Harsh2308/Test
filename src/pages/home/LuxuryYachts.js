import React, { useState, useEffect } from "react";
import { getYachts } from './apis';
import { EffectFade, Navigation, Pagination } from "swiper";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuxuryYachtsSliderContainer } from "./style";
import { motion } from "framer-motion";

const sliderData = [
  {
    title: " Mega Yachts",
    img: "images/yachtMain.png",
  },
  {
    title: "Medium-Sized",
    img: "images/yachtMain.png",
  },
  {
    title: "Smaller Yachts",
    img: "images/yachtMain.png",
  },
];

const Index = () =>
{
  const history = useHistory();
  const [yachtData, setYachtData] = useState(null)
  const brokerId = localStorage.getItem('brokerId')
  const [slideEffectInprogess, setSlideEffectInprogess] = useState(false)
  console.log(slideEffectInprogess)

  const navigateHandler = () =>
  {
    history.push("/luxury-yacht-rentals-miami");
  };

  useEffect(() =>
  {
    getYachts(brokerId)
      .then((res) =>
      {
        const sorted = res.data.Data?.sort((a, b) => a.totalFeet > b.totalFeet ? 1 : -1);
        setYachtData(sorted)
      }).catch((err) => console.log(err))
  }, [brokerId])


  const handleTranstion = () =>
  {
    setSlideEffectInprogess(false)
  }

  return (
    <LuxuryYachtsSliderContainer>
      <div className='yachts_heading'>
        <h1>Luxuri Yachts</h1>
      </div>
      <div className='yachts_slider'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          className='mySwiper'
          speed={2000}
          effect="slide"
          onSlideChange={() => setSlideEffectInprogess(true)}
          onTransitionEnd={handleTranstion}
          centeredSlides={false}
          modules={[Navigation]}
          pagination={{ clickable: true }}
        >
          {sliderData?.map((item, i) =>
          {
            return (
              <SwiperSlide key={i}>
                <div className='yachts_slider_item'>

                  <div className='yachts_slider_item_heading'>
                    {!slideEffectInprogess && (
                      <motion.h1 initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>{item.title}</motion.h1>
                    )}
                  </div>

                  <div className="yachts_slider_item_image">
                    <img src={item.img} alt='img' />
                  </div>

                  <div className='yachts_slider_item_cards'>
                    {!slideEffectInprogess && (
                      <>
                        <motion.div initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }} className='yachts_slider_item_cards_card'>
                          <img src='images/usersIcon.svg' alt='usericon' />
                          <h1>Guests</h1>
                          {/* <p>{item.numberOfSeats}</p> */}
                          <p>13</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }} className='yachts_slider_item_cards_card'>
                          <img src='images/sizeArrow.svg' alt='sizeArrow' />
                          <h1>Size</h1>
                          <p>98- 164ft</p>
                          {/* <p>{item.totalFeet}ft</p> */}
                        </motion.div>
                      </>
                    )}
                  </div>


                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='yachts_explore'>
        <button onClick={navigateHandler}>
          <p>Explore All</p>
          <img src='images/btnArrow.svg' alt='btnarrow' />
        </button>
      </div>
    </LuxuryYachtsSliderContainer>
  );
};

export default Index;