import React from 'react';
import { ProductImageSlider } from './style'

const Index = ({ viewImagesButton = null}) => {
  return (
    <div>
      <ProductImageSlider sliderImage='images/LocationSliderFour.png' >
        {viewImagesButton()}
      </ProductImageSlider>
    </div>
  )
}

export default Index