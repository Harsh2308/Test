import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import InquiryBox from 'common/inquiryBox';
import CarSpecCard from "./CarSpecCard.js";
import { CarStyledContent } from "./style.js";
import InquiryDateModal from './InquiryDateModal';
import { Swiper, SwiperSlide } from "swiper/react";

const Index = ({ year, detail, selectDate, engineTypes, setSelectDate, setInquiryModalOpen }) => {
    const paragraphs = detail?.description.split('\n')
    const [width, setWidth] = useState(window.innerWidth)
    const [specifications, setSpecifications] = useState([])
    const [inquiryDateModalState, setInquiryDateModalState] = useState(false)

    window.addEventListener('resize', function () {
        setWidth(window.innerWidth);
    });

    const manipulateCarSpecifications = useCallback((detail) => {
        const changeObj = [
            {
                "icon": "images/carimages/carspecicon.svg",
                "value": detail?.horsePower,
                "title": "Horsepower"
            },
            {
                "icon": "images/carimages/carspecicon1.svg",
                "value": engineTypes[detail?.engineTypeID],
                "title": "Engine"
            },
            {
                "icon": "images/carimages/carspecicon2.svg",
                "value": `${detail?.topMPH}mph`,
                "title": "Max Speed"
            },
            {
                "icon": "images/carimages/carspecicon3.svg",
                "value": `${detail?.zeroTo60}s`,
                "title": "Zero to 60"
            },
            {
                "icon": "images/carimages/carspecicon4.svg",
                "value": detail?.numberOfSeats,
                "title": "Seats"
            },
            {
                "icon": "images/carimages/carspecicon5.svg",
                "value": "Bloody Red",
                "title": "Exterior"
            },
            {
                "icon": "images/carimages/carspecicon6.svg",
                "value": "Galaxy Milk",
                "title": "Interior"
            },
            {
                "icon": "images/carimages/carspecicon7.svg",
                "value": "Sedan",
                "title": "Body Type"
            }
        ]
        setSpecifications(changeObj)
    }, [engineTypes])

    useEffect(() => {
        manipulateCarSpecifications(detail)
        return () => setSpecifications([])
    }, [detail, manipulateCarSpecifications])

    return (
        <CarStyledContent>
            {inquiryDateModalState ? (
                <InquiryDateModal
                    pickUp={selectDate.pickUp}
                    dropOff={selectDate.dropOff}
                    setSelectDate={setSelectDate}
                    setInquiryDateModalState={setInquiryDateModalState}
                />
            ) : null}
            <div className="content">
                <div className="content_carDetail">
                    <h1 className="content_carDetail_heading">
                        {detail?.friendlyName} <span>{year[detail?.year]}</span>
                    </h1>
                    <h2 className="content_carDetail_price">
                        ${detail?.dailyRate?.toLocaleString('en-US')}<span>/day</span>
                    </h2>
                </div>
                <div className="content_specifications">
                    {width > 520
                        ? <>
                            <h3>Specifications</h3>
                            <div className="content_specifications_cards">
                                {specifications?.map(item => {
                                    return <CarSpecCard key={item.title} data={item} />
                                })}
                            </div>
                        </>
                        : <Swiper
                            spaceBetween={16}
                            slidesPerView={3.5}
                            breakpoints={{
                                320: {
                                    spaceBetween: 8,
                                    slidesPerView: 2.8,
                                },
                                375: {
                                    spaceBetween: 16,
                                    slidesPerView: 3.5,
                                }
                            }}
                        >
                            {specifications?.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <CarSpecCard data={item} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    }
                </div>
                <div className="content_description">
                    <h3>Description</h3>
                    {paragraphs?.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>
            <InquiryBox price={detail?.dailyRate} setInquiryModalOpen={setInquiryModalOpen}>
                <div className="inputsPicker_one">
                    <label>Pickup Date</label>
                    <div className="startDate" onClick={() => setInquiryDateModalState(true)}>
                        <img src="images/datepicker.svg" alt="calendar-icon" />
                        <p style={{ margin: '0' }}>{selectDate.pickUp ? moment(selectDate.pickUp).format("MMM DD, YYYY") : 'Select Dates'}</p>
                    </div>
                </div>
                <div className="inputsPicker_two">
                    <label>Dropoff date</label>
                    <div className="endDate" onClick={() => setInquiryDateModalState(true)}>
                        <img src="images/datepicker.svg" alt="calendar-icon" />
                        <p style={{ margin: '0' }}>{selectDate.dropOff ? moment(selectDate.dropOff).format("MMM DD, YYYY") : 'Select Dates'}</p>
                    </div>
                </div>
            </InquiryBox>
        </CarStyledContent >
    )
}

export default Index