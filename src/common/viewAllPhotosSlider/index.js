import { useState, useEffect, useRef } from "react";
import { ViewAllPhotosContainer } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Pagination } from "swiper";

const Index = ({ showCaseImage, bedroomTitle }) =>
{
  const [selected, setSelected] = useState();
  const [mainSlider, setMainSlider] = useState();
  const childRef = useRef()
  const [swiper,setSwiper] = useState(null);

  const uniqueTitlesArray = [
    ...new Set(showCaseImage?.map((item) => item.title)),
  ];
  const newArray = uniqueTitlesArray.map((title) =>
  {
    return {
      title: title,
      images: showCaseImage
        .filter((item) => item.title === title)
        .map((item) =>
        {
          return {
            imageFilePath: item.imageFilePath,
          };
        }),
    };
  });

  useEffect(() =>
  {
    if (bedroomTitle)
    {
      setSelected(bedroomTitle);
      const clickedBed = newArray
        .filter((item) => item.title === bedroomTitle)
        .map((item) => item.images);

      setMainSlider(clickedBed[0]);

      return;
    } else
    {
      setMainSlider(newArray[0].images);
      setSelected(newArray[0].title);
    }
  }, [bedroomTitle]);

  const handlePrev = () => {
    const currentTitleIndex = newArray.findIndex(
      (item) => item.title === selected
    );
    if(currentTitleIndex===0) {
       const prevSlide = newArray[newArray.length-1].title;
      setSelected(prevSlide);
      setMainSlider(newArray[newArray.length-1].images);
      childRef.current.swiper.slideTo(newArray.length-1);
    }
    const prevTitle = newArray[currentTitleIndex-1].title;	
    setSelected(prevTitle);	
    setMainSlider(newArray[currentTitleIndex-1].images);	
    childRef.current.swiper.slideTo(currentTitleIndex);
  };
  const handleNext = () => {
    const currentTitleIndex = newArray.findIndex(
      (item) => item.title === selected
    );
    if(swiper.isEnd && newArray.length===currentTitleIndex+1){
       const nextTitle = newArray[0].title;
      setSelected(nextTitle);
      setMainSlider(newArray[0].images);
      swiper.slideTo(0)
      childRef.current.swiper.slideTo(0);
    }
    const nextTitle = newArray[currentTitleIndex + 1].title;
      setSelected(nextTitle);
      setMainSlider(newArray[currentTitleIndex + 1].images);
      swiper.slideTo(0)
      childRef.current.swiper.slideTo(currentTitleIndex+1);
  }

  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <ViewAllPhotosContainer>
      <div className="viewAllPhotos_sliders">
        <div className="viewAllPhotos_sliders_top">
        <div style={{position: "absolute",left: 25,top: "38%",cursor: "pointer",height: "150px"}} onClick={handlePrev}><img src="/images/left.svg" /></div>
          <div style={{position: "absolute",right: 25,top: "38%",cursor: "pointer",height: "150px"}} onClick={handleNext}><img src="/images/right.svg" /></div>
          <Swiper
            style={{position: "relative"}}
            slidesPerView={1}
            slidesPerGroup={1}
            fadeEffect={"slide"}
            onSwiper={setSwiper}
            // navigation={true}
            navigation={true}
            pagination={true}
            className="parentViewPhotosSlider"
            modules={[Navigation, Pagination]}
          >
         
            {mainSlider?.map((item, index) =>
            {
              return (
                <SwiperSlide key={index}>
                  <div className="main-image">
                    <img src={item.imageFilePath} alt="imageFilePath" />
                    
                    <div className="tag">{selected}</div>
                  </div>
                  
                </SwiperSlide>
                
              );
              
            })}
            
          </Swiper>
         
        </div>
        <div className="viewAllPhotos_sliders_bottom">
          <Swiper
            ref={childRef}
            navigation={true}
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween= {20}
            modules={[Navigation, Thumbs]}
            className='mySwiper'
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
                slidesPerGroup: 2
              },
              1040: {
                slidesPerView: 4,
                slidesPerGroup: 4
              },
              1300: {
                slidesPerView: 4,
                slidesPerGroup: 4
              }
            }}
          >
            {newArray?.map((item, index) =>
            {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() =>
                    {
                      setSelected(item.title);
                      setMainSlider(item.images);
                    }}
                    className={`image ${item.title === selected && "active"}`}
                  >
                    <img
                      src={item.images[0].imageFilePath}
                      alt="imageFilePath"
                    />
                  </div>
                  <p className="title">{item.title}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ViewAllPhotosContainer>
  );
};

export default Index;