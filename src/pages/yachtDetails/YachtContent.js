import React, { useState, useEffect, useCallback } from "react";
import moment from 'moment';
import { Select } from "antd";
import InquiryBox from 'common/inquiryBox';
import { YachtStyledContent } from "./style.js";
import InquiryDateModal from './InquiryDateModal';

const Index = ({ detail, setHours, reserveDate, setReserveDate, setInquiryModalOpen }) => {
    const [rates, setRates] = useState()
    const paragraphs = detail?.description.split('\n')
    const [inquiryDateModalState, setInquiryDateModalState] = useState(false)

    const optionsHour = hourPreferences?.map((option) => {
        return (
            <Select.Option key={option.id} value={option.name}>
                {option.name}
            </Select.Option>
        );
    });

    const manipulateYachtRates = useCallback((detail) => {
        const changeObj = [
            {
                "price": detail?.fourHourRate,
                "duration": "4"
            },
            {
                "price": detail?.sixHourRate,
                "duration": "6"
            },
            {
                "price": detail?.eightHourRate,
                "duration": "8"
            }
        ]
        setRates(changeObj)
    }, [])

    useEffect(() => {
        manipulateYachtRates(detail)
        return () => manipulateYachtRates([])
    }, [detail, manipulateYachtRates])

    return (
        <YachtStyledContent>
            {inquiryDateModalState ? (
                <InquiryDateModal
                    selectedDate={reserveDate}
                    setSelectedDate={setReserveDate}
                    setInquiryDateModalState={setInquiryDateModalState}
                />
            ) : null}
            <div className="content">
                <div className="content_yachtDetail">
                    <h1 className="content_yachtDetail_heading">
                        {detail?.friendlyName}
                    </h1>
                    <div className="content_yachtDetail_data">
                        <div>
                            <img src="images/yachtdot.svg" alt="dot" />
                            <p>{detail?.locationName} location</p>
                        </div>
                        <div>
                            <img src="images/yachtdot.svg" alt="dot" />
                            <p>{detail?.numberOfSeats} Guests</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="content_rates">
                    <h3>Rates</h3>
                    <div className="content_rates_data">
                        {rates?.map((rate, index) => {
                            return (
                                <div key={index}>
                                    <img src="images/yachtdot.svg" alt="dot" />
                                    <p>${rate.price?.toLocaleString('en-US')}/<span>{rate.duration} hours</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
                <div className="content_description">
                    <h3>Description</h3>
                    {paragraphs?.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>

            <InquiryBox price={detail?.hourlyRate} setInquiryModalOpen={setInquiryModalOpen} hour={true}>
                <div className="inputsPicker_one">
                    <div className="div"></div>
                    <div className="selectDate" onClick={() => setInquiryDateModalState(true)}>
                        <img src="images/datepicker.svg" alt="calendar-icon" />
                        <p style={{ margin: '0' }}>{reserveDate ? moment(reserveDate).format("MMM DD, YYYY") : 'Select Date'}</p>
                    </div>
                </div>
                <div className="inputsPicker_two">
                    <div className="div"></div>
                    <Select
                        bordered={true}
                        defaultValue="Select hours"
                        onChange={(val) => setHours(val)}
                    >
                        {optionsHour}
                    </Select>
                </div>
            </InquiryBox>
        </YachtStyledContent>
    );
};

export default Index;
const hourPreferences = [
    { id: "4", name: "4 Hours" },
    { id: "6", name: "6 Hours" },
    { id: "8", name: "8 Hours" },
];