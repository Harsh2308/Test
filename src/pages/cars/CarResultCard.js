import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarResultStyledCard } from './style';

const Index = ({ data }) => {
  const [activeCard, setActiveCard] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const carName = data.friendlyName.replaceAll(" ", "-")

  window.addEventListener('resize', function () {
    setWidth(window.innerWidth);
  })

  return (
    <CarResultStyledCard>
      <div className={`card ${width > 520 && activeCard ? 'activeCard' : ''}`}>
        <div className='card_image-container'>
          <div className='image'>
            <img src={data.imageFilePath || 'images/carimages/cardetail1.png'} alt="carImage" />
          </div>
          <h2 className='car-name'>{data.friendlyName}</h2>
        </div>
        <div className='card_info-container'>
          <h2>${data.dailyRate?.toLocaleString('en-US')}<span className='slash'>/</span><span className='duration'>day</span></h2>
          <Link
            className='detail-btn'
            onMouseOver={() => setActiveCard(!activeCard)}
            onMouseLeave={() => setActiveCard(!activeCard)}
            to={{
              pathname: `/car-details/${carName}`,
              state: { id: data.transportationObjectID }
            }}
          >
            Details
          </Link>
        </div>
      </div>
    </CarResultStyledCard>
  )
}

export default Index