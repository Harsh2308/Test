import React, { useState } from 'react';
import { SearchVillasDate } from './style';
import SearchModal from 'common/searchModal';
import RangePicker from 'common/rangePicker';

const SearchVilass = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const { selectDate, checkInDate, checkOutDate, searchData, setBtnText, setSearchData, handleCrossIcon, handleBackButton, handleNextButton, handleLeftArrowIcon, searchBarScreenActive,handleData } = props

  window.addEventListener('resize', function () {
    setWidth(window.innerWidth);
  });

  const handleChange = (item) => {
    handleData(item)
  }

  return (
    <SearchModal
      handleCrossIcon={handleCrossIcon}
      searchBarScreenActive={selectDate && searchBarScreenActive}
      handleLeftArrowIcon={width > 520 && !selectDate && handleLeftArrowIcon}
    >
      <SearchVillasDate selectDate={selectDate}>
        <div className='title'>
          <h1>{selectDate ? "" : "When?"}</h1>
        </div>
        <RangePicker
          setBtnText={setBtnText}
          rangeValue={searchData}
          checkInDate={checkInDate}
          checkOutDate={checkOutDate}
          setRangeValue={setSearchData}
          handleChange={handleChange}
        />
        <div className='btn-container'>
          {width < 520 ? !selectDate ? handleBackButton() : <div /> : <div />}
          {!selectDate ? handleNextButton() : Object.keys(searchData).length !== 0 && searchData.endDate !== 'Invalid date' && handleNextButton()}
        </div>
      </SearchVillasDate>
    </SearchModal>
  )
}

export default SearchVilass