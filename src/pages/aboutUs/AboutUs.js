import React from 'react'
import { AboutUsStyledContainer } from './style';
import aboutdata from './AboutUsData.json';
import AboutCard from './AboutCard';

const Index = () => {

    return (
        <AboutUsStyledContainer>
            <div className='aboutus-main'>
                <div className="aboutus-container">
                    <h1 className='about-title'>Luxuri Realtors Team</h1>
                    <div className="cards-container">
                        {aboutdata.carddata.map((item, i) => {
                            return <AboutCard key={item.id} data={item} index={i} />
                        })}
                    </div>
                </div>
            </div>
        </AboutUsStyledContainer>
    )
}

export default Index