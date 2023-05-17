import React, { useState, useEffect } from 'react';
import CarBanner from './CarBanner';
import CarContent from './CarContent';
import { GetACarDetails } from './api';
import CarMbSlider from './CarMbSlider';
import InquiryForm from './InquiryForm';
import { CarDetailPage } from './style.js';
import { InquiryMobBox } from "./style.js";
import InquiryModal from 'common/inquiryModal';
import { useLocation } from 'react-router-dom';
import SeoHead from 'common/SEOHead';

const engineTypes = {
  "1": "6.5L V12",
  "2": "6.0L V10",
  "3": "6.5L V12",
  "4": "6.0L V10",
  "5": "3.6L V6",
  "6": "3.0 L 6-cylinder",
  "7": "3.0 L 6-cylinder diesel",
  "8": "3.0 L V6",
  "9": "3.8 L V8",
  "10": "3.9 L V8",
  "11": "4.0 L twin-turbo V8",
  "12": "4.0 L V8",
  "13": "5.2 L V10",
  "14": "6.6 L V12",
  "15": "6.7 L V12"
}

const years = {
  "1": "1960",
  "2": "1980",
  "3": "2019",
  "4": "2020",
  "5": "2021",
  "6": "2022",
  "7": "2023",
}

const Index = () => {
  const location = useLocation()
  const id = location.state.id
  const [selectDate, setSelectDate] = useState({})
  const brokerId = localStorage.getItem('brokerId')
  const [carDetails, setCarDetails] = useState(null)
  const employeeId = localStorage.getItem('employeeId')
  const [width, setWidth] = useState(window.innerWidth)
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)

  // const [inquiryEndDate, setInquiryEndDate] = useState(moment(endDate, moment.defaultFormat).toDate())
  // const [inquiryStartDate, setInquiryStartDate] = useState(moment(startDate, moment.defaultFormat).toDate())

  window.addEventListener('resize', function () {
    setWidth(window.innerWidth);
  })

  useEffect(() => {
    GetACarDetails(id, brokerId, employeeId)
      .then((res) => setCarDetails(res.data.Data))
      .catch((error) => console.log(error))
  }, [id, brokerId, employeeId])
  console.log(carDetails)
  return (
    <CarDetailPage>

      {inquiryModalOpen ? (
        <InquiryModal
          size="48"
          mbSize="30"
          title="Inquire"
          bg={carDetails.imageFileName}
          name={carDetails.friendlyName}
          inquiryModalOpen={inquiryModalOpen}
          setInquiryModalOpen={setInquiryModalOpen}
          form={
            <InquiryForm
              selectDate={selectDate}
              name={carDetails.friendlyName}
              locationId={carDetails.locationID}
              location={carDetails.locationName}
            />
          }
        />
      ) : null}
      {width > 520
        ? <CarBanner bannerImg={carDetails?.imageFileName} secondaryImages={carDetails?.secondaryImagesList} />
        : <CarMbSlider secondaryImages={carDetails?.secondaryImagesList} />
      }
      <CarContent
        year={years}
        detail={carDetails}
        selectDate={selectDate}
        engineTypes={engineTypes}
        setSelectDate={setSelectDate}
        setInquiryModalOpen={setInquiryModalOpen}
      />

      <InquiryMobBox>
        <button onClick={() => setInquiryModalOpen(true)}>
          Inquire
          <img style={{ marginLeft: '12px' }} src="images/arrow-right.svg" alt="arrow-right" />
        </button>
        <p>No payment info required</p>
      </InquiryMobBox>
    </CarDetailPage>
  )
}

export default Index