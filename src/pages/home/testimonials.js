import React, { useState, useEffect } from "react";
import { getBrokerReviews } from "./apis";
import Skeleton from '@mui/material/Skeleton';
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialSliderContainer } from "./style";
import { Navigation, Pagination, Mousewheel } from "swiper";

const data = [
  {
    reviewID: '1',
    expanded: false,
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 7,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis'
  },
  {
    reviewID: '2',
    expanded: false,
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 3,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam'
  },
  {
    reviewID: '3',
    expanded: false,
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 7,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam'
  },
  {
    reviewID: '4',
    expanded: false,
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 7,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam'
  },
  {
    reviewID: '5',
    expanded: false,
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam'
  },
  {
    reviewID: '6',
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 7,
    expanded: false,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam'
  },
  {
    reviewID: '7',
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 7,
    expanded: false,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam'
  },
  {
    reviewID: '8',
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 7,
    expanded: false,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    reviewID: '9',
    authorFirstName: 'Mehdi Muzaib',
    numberOfStars: 7,
    expanded: false,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam dolor mattis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, aliquam'
  },
]

const Index = () => {
  const [staticData, setStaticData] = useState(data);
  const [width, setWidth] = useState(window.innerWidth);
  const [borkerReviewsData, setBorkerReviewsData] = useState(null);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);

  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  })

  const handleReadMore = (id, review) => {
    if (review.length > 200) {
      const updatedData = borkerReviewsData.map((item) => {
        if (item.reviewID === id) {
          return { ...item, expanded: !item.expanded };
        }
        return item;
      });
      setBorkerReviewsData(updatedData)
      return
    }
  }

  useEffect(() => {
    getBrokerReviews(1, 1)
      .then((res) => {
        setTestimonialsLoading(false)
        const updatedBorkerReviewsData = res.data.Data?.map(item => {
          return { ...item, expanded: false }
        })
        setBorkerReviewsData(updatedBorkerReviewsData);
      }).catch((err) => console.log(err, console.log(err)))
  }, []);

  return (
    <TestimonialSliderContainer>
      <div className='container-xl'>
        <div className='testimonial_heading'>
          <h1>What Our Clients Say</h1>
        </div>
        <div className='testimonial_slider'>
          <Swiper
            initialSlide={3}
            centeredSlides={true}
            navigation={width > 768 ? true : false}
            modules={[Pagination, Navigation, Mousewheel]}
            pagination={{
              type: 'fraction',
              el: '.custom-pagination',
              renderCustom: (swiper, current, total) => {
                return current + '/' + total;
              }
            }}
            breakpoints={{
              320: {
                spaceBetween: 16,
                slidesPerView: 1.1,
                centeredSlides: false
              },
              375: {
                spaceBetween: 16,
                slidesPerView: 1.1,
                centeredSlides: false
              },
              768: {
                spaceBetween: 16,
                slidesPerView: 2.5,
              },
              1024: {
                spaceBetween: 16,
                slidesPerView: 3.5,
              },
              1220: {
                spaceBetween: 24,
                slidesPerView: 3.5,

              },
              1440: {
                spaceBetween: 24,
                slidesPerView: 3.5,
              },
            }}
            className='mySwiper'
          >
            {testimonialsLoading ?
              Array(6).fill(null)?.map((slide, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Skeleton sx={{ bgcolor: '#303030' }} variant="rectangular" width='100%' height={330} />
                  </SwiperSlide>
                )
              }) : borkerReviewsData?.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className='testimonial_slider_card' onClick={() => handleReadMore(item.reviewID, item.review)}>
                      <div className='testimonial_slider_card_profile'>
                        <div className='testimonial_slider_card_profile_img'>
                          <img src={item.thumbnailImage || `https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F10%2F07%2Fman-156584__340.png&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Favatar%2F&tbnid=CZXW4IEBmonF_M&vet=12ahUKEwi457aHs439AhXBUKQEHT2-ACUQMygIegUIARD7AQ..i&docid=Hcu5m3IV3lUJEM&w=412&h=340&q=avatar%20profile%20picture&ved=2ahUKEwi457aHs439AhXBUKQEHT2-ACUQMygIegUIARD7AQ`} alt='avatar' />
                        </div>
                        <div className='testimonial_slider_card_profile_detail'>
                          <p>{`${item.authorFirstName}`}</p>
                          <img src='images/GIcon.svg' alt='gicon' />
                          <div className='testimonial_slider_card_profile_detail_stars'>
                            {Array(Math.ceil(item.numberOfStars))
                              .fill(null)
                              .map((_, i) => {
                                if (i + 1 <= 5) {
                                  return (
                                    <img
                                      key={i}
                                      alt='ratingStart'
                                      src='images/ratingStar.svg'
                                    />
                                  )
                                }
                              })}
                          </div>
                        </div>
                      </div>
                      <div className='testimonial_slider_card_message'>
                        <p>
                          {item.expanded ? item.review : item.review.substring(0, 200)}
                          {item.review.length > 200 && !item.expanded && (
                            <button onClick={() => handleReadMore(item.reviewID, item.review)}>
                              {item.expanded ? "Read Less" : "Read More"}
                            </button>
                          )}
                          {item.expanded && (
                            <button style={{ float: 'right' }} onClick={() => handleReadMore(item.reviewID, item.review)}>
                              <img src="images/collapse.png" alt="collapse" />
                            </button>
                          )}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
          </Swiper>
          <div className='custom-pagination'></div>
        </div>
      </div>
    </TestimonialSliderContainer >
  );
};

export default Index;