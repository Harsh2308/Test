import React from 'react'
import { LocationCardContainer } from './style'

const Index = ({ img, title, guest, bedroom }) => {

  return (
    <LocationCardContainer>
      <div className='card-img' style={{ backgroundImage: `url(${img})` }}>
        <div className='card_footer'>
          <h1>{title}</h1>
          <ul className='card_footer_text' >
            <li className='card_footer_text_li'>{`${guest} Guests`}</li>
            <li className='card_footer_text_li'>{`${bedroom} Bedrooms`}</li>
          </ul>
        </div>
      </div>
    </LocationCardContainer>
  )
}

export default Index