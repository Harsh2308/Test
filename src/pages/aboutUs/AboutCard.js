import React from 'react'
import { AboutUsStyledContainer } from './style'

const Index = (props) => {

    return (
        <AboutUsStyledContainer>
            <div className='about-card' style={props.index % 2 ? { direction: 'rtl' } : { direction: 'ltr' }}>
                <div className="image-container">
                    <img src={props.data.image} alt="Cardimage" />
                </div>
                <div className="text-container">
                    <div className="inner-text" style={props.index % 2 ? { textAlign: 'left' } : { direction: 'ltr' }}>
                        <h1 className='designation'>{props.data.designation}</h1>
                        <h2 className='name'>{props.data.name}</h2>
                        <p className='para'>{props.data.para}</p>
                    </div>
                </div>
                <div className="designation-container">
                    <h1 className='desig-title'>{props.data.desigtitle}</h1>
                </div>
            </div>
        </AboutUsStyledContainer>
    )
}

export default Index