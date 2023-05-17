import React, { useState, useEffect } from 'react'
import { CarStyledBanner } from './style.js'

const Index = () =>
{
  const [showContent, setShowContent] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', function ()
  {
    setWidth(window.innerWidth);
  })

  useEffect(() =>
  {
    if (width < 520) return setShowContent(false)
  }, [])

  return (
    <CarStyledBanner height={width < 520 && showContent && 482}>
      <div className='background_image'>
        <div className='banner_content'>
          <h1>{width > 520 ? 'Miami Car Rentals' : 'Miami Luxury Car Rentals'}</h1>
          <div className='banner_content_images'>
            <img src="images/carimages/luxury-logo.svg" alt="luxury-logo" />
            <img src="images/carimages/car-banner-vertical-line.svg" alt="line" />
            <img src="images/carimages/mpg.svg" alt="mpg" />
          </div>
          <div className={`banner_content_text ${showContent ? 'active' : ''}`}>
            <div className='content'>
              <h3>In collaboration with mph club</h3>
              <p>Get access to the best rates in the market through a seamless car rental booking experience</p>
            </div>
            {width < 520 && !showContent && (
              <button onClick={() => setShowContent(!showContent)}>
                Learn More
              </button>
            )}
          </div>
        </div>
      </div>
    </CarStyledBanner>
  )
}

export default Index 