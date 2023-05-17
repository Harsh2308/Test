import React, { useState } from 'react';
import { urlData } from '../urlData';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { RangePickerContainer } from './style';
import DateRangeCalendar from '../dateRangeCalendar';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Index = ({ checkInDate, checkOutDate, rangeValue, setRangeValue, setBtnText = null, handleChange }) => {
    const [key, setKey] = useState(1);
    const { startDate, endDate } = urlData;
    const [selected, setSelected] = useState(0);
    const btns = [{ value: 'days', text: '3-29 nights' }, { value: 'months', text: '30+ nights' }];

    const handleDateDuration = (e, index) => {
        setSelected(index)
        setBtnText('Submit')
        if (e.target.value === 'days') {
            // const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            // setRangeValue({ ...rangeValue, startDate: moment(today).format('Y-MM-DD'), endDate: moment(lastDayOfMonth).format('Y-MM-DD') })
            setRangeValue({ ...rangeValue, flexible: true, value: e.target.value, startDate: startDate, endDate: endDate })
        }
        else if (e.target.value === 'months') {
            setRangeValue({ ...rangeValue, flexible: true, value: e.target.value, startDate: startDate, endDate: endDate })
            // const sameDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
            // setRangeValue({ ...rangeValue, startDate: moment(today).format('Y-MM-DD'), endDate: moment(sameDayOfNextMonth).format('Y-MM-DD') })
        }
        handleChange(index)
    }

    return (
        <RangePickerContainer>
            <div className='searchVillasDateTabs'>
                <Tabs
                    activeKey={key}
                    id="controlled-tab-example"
                    onSelect={(k) => setKey(k)}
                >
                    <Tab eventKey={1} title="Choose dates" className='customRangePikcerTabStyle'>
                        <DateRangeCalendar
                            setBtnText={setBtnText}
                            rangeValue={rangeValue}
                            checkInDate={checkInDate}
                            checkOutDate={checkOutDate}
                            setRangeValue={setRangeValue}
                        />
                    </Tab>
                    <Tab eventKey={2} title="I’m Flexible" className='customRangePikcerTabStyle'>
                        <div className='searchVillasDateTabs_flexibleSlot' >
                            <h1>Stay For a :</h1>
                            <hr />
                            <ButtonGroup  size="lg" >
                                {btns.map((item, index) => {
                                    return (
                                        <button
                                            key={item.value}
                                            value={item.value}
                                            onClick={(e) => handleDateDuration(e, index + 1)}
                                            className={selected === index + 1 ? 'active' : ''}
                                        >
                                            {item.text}
                                        </button>
                                    )
                                })}
                            </ButtonGroup>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </RangePickerContainer>
    )
}

export default Index