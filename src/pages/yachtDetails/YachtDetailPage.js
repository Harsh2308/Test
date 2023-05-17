import React, { useState, useEffect } from 'react';
import InquiryForm from './InquiryForm';
import YachtBanner from './YachtBanner';
import { GetAYachtDetails } from './api';
import YachtContent from './YachtContent';
import YachtMbSlider from './YachtMbSlider';
import InquiryModal from 'common/inquiryModal';
import { useLocation } from 'react-router-dom';
import { YachtDetailPage, InquiryMobBox } from './style';
import SeoHead from 'common/SEOHead';

const Index = () => {
    const location = useLocation()
    const id = location.state.id
    const [hours, setHours] = useState(null)
    const brokerId = localStorage.getItem('brokerId')
    const [reserveDate, setReserveDate] = useState(null)
    const employeeId = localStorage.getItem('employeeId')
    const [width, setWidth] = useState(window.innerWidth)
    const [yachtDetails, setYachtDetails] = useState(null)
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
    let noOfGuests = yachtDetails?.numberOfSeats

    window.addEventListener('resize', function () {
        setWidth(window.innerWidth);
    })

    useEffect(() => {
        GetAYachtDetails(id, brokerId, employeeId)
            .then((res) => setYachtDetails(res.data.Data))
            .catch((err) => console.log(err))
    }, [id, brokerId, employeeId])
    return (
        <YachtDetailPage>
            {inquiryModalOpen ? (
                <InquiryModal
                    size="48"
                    mbSize="25"
                    title="Inquire"
                    bg={yachtDetails.imageFileName}
                    name={yachtDetails.friendlyName}
                    inquiryModalOpen={inquiryModalOpen}
                    setInquiryModalOpen={setInquiryModalOpen}
                    form={
                        <InquiryForm
                            hours={hours}
                            guests={noOfGuests}
                            reserveDate={reserveDate}
                            name={yachtDetails.friendlyName}
                            locationId={yachtDetails.locationID}
                            location={yachtDetails.locationName}
                        />
                    }
                />
            ) : null}
            {width > 520
                ? <YachtBanner bannerImg={yachtDetails?.imageFileName} secondaryImages={yachtDetails?.secondaryImagesList} />
                : <YachtMbSlider secondaryImages={yachtDetails?.secondaryImagesList} />
            }
            <YachtContent
                setHours={setHours}
                detail={yachtDetails}
                reserveDate={reserveDate}
                setReserveDate={setReserveDate}
                setInquiryModalOpen={setInquiryModalOpen}
            />

            <InquiryMobBox>
                <button onClick={() => setInquiryModalOpen(true)}>
                    Inquire
                    <img style={{ marginLeft: '12px' }} src="images/arrow-right.svg" alt="arrow-right" />
                </button>
                <p>No payment info required</p>
            </InquiryMobBox>
        </YachtDetailPage>
    )
}

export default Index