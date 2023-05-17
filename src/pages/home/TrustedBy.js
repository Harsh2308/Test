import React from 'react';
import { TrustedBySectionContainer } from './style';
import TrustedClientsSlider from '../TrustedClientsSlider';

const Index = () => {
    const logos = [
        <img className='luxuri_trusted_card' src="images/logos/expedia.svg" alt='expedia' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/homeVilla.svg" alt='homeVillas' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/airbnb.svg" alt='airbnb' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/tripAdvisor.svg" alt='tripAdvisor' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/expedia.svg" alt='expedia' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/homeAway.svg" alt='homeAway' role="presentation" />,
    ];

    const mbLogos = [
        <img className='luxuri_trusted_card' src="images/logos/mb/expedia.svg" alt='expedia' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/mb/homeVilla.svg" alt='homeVillas' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/mb/airbnb.svg" alt='airbnb' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/mb/tripAdvisor.svg" alt='tripAdvisor' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/mb/expedia.svg" alt='expedia' role="presentation" />,
        <img className='luxuri_trusted_card' src="images/logos/mb/homeAway.svg" alt='homeAway' role="presentation" />,
    ];

    return (
        <TrustedBySectionContainer>
            <div className='container'>
                <div className='trustedClient_section'>
                    <div className='trustedClient_section_heading'>
                        <h1>Trusted BY</h1>
                        <h1>Trusted By</h1>
                    </div>
                    <div className='trustedClient_section_slider'>
                        <TrustedClientsSlider logos={logos} />
                        <TrustedClientsSlider logos={logos} />
                    </div>
                    <div className='trustedClient_section_slider_mobile'>
                        <TrustedClientsSlider logos={mbLogos} />
                    </div>
                </div>
            </div>
        </TrustedBySectionContainer>
    )
}

export default Index