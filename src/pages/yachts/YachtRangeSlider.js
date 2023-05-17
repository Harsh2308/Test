import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { YachtRangeStyledSlider } from "./style.js";

const Index = ({ min, max, yachtMain, swiperRef, getFilterValue }) => {
  const [value, setValue] = useState();
  //   const [swipeToLogo, setSwipeToLogo] = useState(true);

  const range = max - min;
  const step = Math.ceil(range / 20);
  const marks = [];
  for (let i = min; i <= max; i += step) {
    marks.push({ value: i });
  }

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      getFilterValue(newValue);
      //   setSwipeToLogo(false);
      // const slideIndex = Math.round((newValue - 1) / 5);
      const slideIndex = yachtMain.filter(
        (item) => item.totalFeet === newValue && item.totalFeet
      );
      swiperRef.current.slideTo(slideIndex[0]?.totalFeet);
      // swiperRef.current.slideTo(slideIndex);
    }
  };
  return (
    <YachtRangeStyledSlider>
      <div className="range-slider-box">
        <Slider
          min={min}
          max={max}
          marks={marks}
          aria-labelledby="input-slider"
          valueLabelDisplay="on"
          onChange={handleChange}
          // onChangeCommitted={handleFilterData}
          getAriaValueText={(value) => `${value}`}
          valueLabelFormat={(value) => `${value}ft`}
        />
        {/* {swipeToLogo && <img src="images/swipeRange.svg" alt="swipe" />} */}
      </div>
    </YachtRangeStyledSlider>
  );
};

export default Index;
