import React, { useState, useEffect } from 'react';
import { urlData } from 'common/urlData';
import { httpFeaturedProperty } from './apis';
import LocationSlider from './locationSlider';
import { LocationsSliderContainer } from './style';

const Index = () => {
  const [fortData, setFortData] = useState([])
  const [miamiData, setMiamiData] = useState([])
  const [aspenData, setAspenData] = useState([])
  const brokerId = localStorage.getItem('brokerId')
  const { lowerValue, upperValue, guestCount, scrollPosition, startDate, endDate, sort } = urlData;

  useEffect(() => {
    httpFeaturedProperty(brokerId, 3)
      .then(res => setMiamiData(res.data.Data !== null ? res.data.Data : []))
      .catch(err => console.log(err))

    httpFeaturedProperty(brokerId, 1)
      .then(res => setAspenData(res.data.Data !== null ? res.data.Data : []))
      .catch(err => console.log(err))

    httpFeaturedProperty(brokerId, 6)
      .then(res => setFortData(res.data.Data !== null ? res.data.Data : []))
      .catch(err => console.log(err))

  }, [brokerId]);

  return (
    <LocationsSliderContainer>
      <div className='location_heading' id='villas'>
        <h1>Locations</h1>
      </div>
      <div className='container-xl'>
        <LocationSlider
          title='Miami'
          sliderData={miamiData}
          route={`miami-vacation-homes?noOfGuest=${guestCount}&checkInDate=${startDate}&checkOutDate=${endDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${3}&locationName=Miami&scrollPosition=${scrollPosition}`}
        />
        <LocationSlider
          sliderData={fortData}
          title='Fort Lauderdale'
          route={`fort-lauderdale-vacation-homes?noOfGuest=${guestCount}&checkInDate=${startDate}&checkOutDate=${endDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${1}&locationName=Fort-lauderdale&scrollPosition=${scrollPosition}`}
        />
        <LocationSlider
          title='Aspen'
          sliderData={aspenData}
          route={`aspen-vacation-homes?noOfGuest=${guestCount}&checkInDate=${startDate}&checkOutDate=${endDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${6}&locationName=Aspen&scrollPosition=${scrollPosition}`}
        />
      </div>
    </LocationsSliderContainer>
  )
}

export default Index