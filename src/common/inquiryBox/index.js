import React from 'react'
import { InquiryBoxContainer } from './style';

const Index = ({ price, setInquiryModalOpen, children, hour = false, minimumNightStay, displayBanner = false }) => {

    return (
        <InquiryBoxContainer>
            <div className="inquire_box">
                <div className="inquire_box_body">
                    {displayBanner && (
                        <div className='inquire_box_body_banner'>
                            <p>{minimumNightStay}+ nights only</p>
                        </div>
                    )}
                    <div className="inquire_box_body_header">
                        <h4>Starting At</h4>
                        <p>${price?.toLocaleString('en-US')}<span>per {hour ? 'hour' : 'day'}</span></p>
                    </div>
                    <div className="inquire_box_body_inputsPicker">
                        {children}
                    </div>
                    <div className="inquire_box_body_bottom">
                        <button onClick={() => setInquiryModalOpen(true)}>Inquire</button>
                        <p>No Payment info required</p>
                    </div>
                </div>
            </div>
        </InquiryBoxContainer>
    )
}

export default Index