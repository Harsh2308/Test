import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { RangePickerContainer } from 'common/globalStyle';

const Index = ({ checkInDate = null, checkOutDate = null, setBtnText, rangeValue, setRangeValue }) => {
  const [endDate, setEndDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function () {
    setWidth(window.innerWidth);
  });

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      setRangeValue({ ...rangeValue, flexible: false, value: null, startDate: moment(start).format('Y-MM-DD'), endDate: moment(end).format('Y-MM-DD') })
    }
    typeof (setBtnText) === 'function' && setBtnText('Submit')
  };

  const isWeekday = (date) => {
    const day = date.getDay();
    const a = day !== 0 && day !== 6;
    return a
  };

  const clearDates = () => {
    setStartDate(null)
    setEndDate(null)
    setRangeValue({})
    typeof (setBtnText) === 'function' && setBtnText('Skip')
  }

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      setStartDate(moment(checkInDate, moment.defaultFormat).toDate())
      setEndDate(moment(checkOutDate, moment.defaultFormat).toDate())
    }
  }, [checkInDate, checkOutDate])

  return (
    <RangePickerContainer>
      <div className="DateRangeCalender">
        <DatePicker
          inline
          selectsRange
          endDate={endDate}
          onChange={onChange}
          selected={startDate}
          startDate={startDate}
          filterDate={isWeekday}
          useWeekdaysShort={true}
          monthsShown={width < 700 ? 1 : 2}
        />
      </div>
      <div className="dateRangeFooter">
        <div className="dateRangeFooter_checkIn">
          <p className="key">Check-In: </p>
          <p className="value">{startDate && moment(startDate).format("MMM DD")}</p>
        </div>
        <div className="dateRangeFooter_checkOut">
          <p className="key">Check-Out: </p>
          <p className="value">{endDate && moment(endDate).format("MMM DD")}</p>
        </div>
        {startDate && (
          <div className="dateRangeFooter_clear-btn">
            <button onClick={clearDates}>Clear Dates</button>
          </div>
        )}
      </div>
    </RangePickerContainer>
  );
};

export default Index;