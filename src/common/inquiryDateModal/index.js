import React from 'react';
import { RangePickerContainer } from './style';
import DateRangeCalendar from 'common/dateRangeCalendar';
import { InquiryDateModalContainer } from 'common/globalStyle';

const Index = ({ checkInDate, checkOutDate, selectedDate, setSelectedDate, setInquiryDateModalState }) => {

    return (
        <InquiryDateModalContainer>
            <div className='inquiryDateModalContainer_content'>
                <div className='inquiryDateModalContainer_content_header'>
                    <h1>Select Dates</h1>
                    <img
                        className="cross-icon"
                        alt='modal-cross-icon'
                        src='images/modelCrossIconWhite.svg'
                        onClick={() => {
                            // setSelectedDate()
                            setInquiryDateModalState(false)
                        }}
                    />
                </div>
                <div className='inquiryDateModalContainer_content_body'>
                    <RangePickerContainer>
                        <DateRangeCalendar
                            checkInDate={checkInDate}
                            rangeValue={selectedDate}
                            checkOutDate={checkOutDate}
                            setRangeValue={setSelectedDate}
                        />
                    </RangePickerContainer>
                    <div className='submitBtn-container'>
                        {Object.keys(selectedDate).length !== 0 && selectedDate.endDate !== 'Invalid date' && <button onClick={() => setInquiryDateModalState(false)}>Submit</button>}
                    </div>
                </div>
            </div>
        </InquiryDateModalContainer>
    )
}

export default Index