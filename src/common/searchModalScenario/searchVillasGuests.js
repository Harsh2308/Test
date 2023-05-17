import React, { useState } from 'react';
import { urlData } from 'common/urlData';
import Slider from '@mui/material/Slider';
import { SearchVillasGuests } from './style';
import SearchModal from 'common/searchModal';
import { useHistory, useLocation } from 'react-router-dom';

const { lowerValue, upperValue, scrollPosition, sort } = urlData;

const SearchVillas = ({ handleCrossIcon, setSelectGuests, setsearchModalState, setCitiesFormPayload, searchBarScreenActive }) => {
    const history = useHistory()
    const { search } = useLocation()
    const query = new URLSearchParams(search)
    const [selected, setSelected] = useState(0)
    const [width, setWidth] = useState(window.innerWidth)
    const noOfGuest = query.get("noOfGuest")
    const location = query.get("locationName")
    const [value, setValue] = useState(noOfGuest)
    const checkInDate = query.get("checkInDate")
    const checkOutDate = query.get("checkOutDate")

    window.addEventListener('resize', function () {
        setWidth(window.innerWidth);
    });

    const handleGuestsCount = () => {
        if (value === 0) {
            setsearchModalState(false)
            document.querySelector("body").style.overflow = 'auto';
            return
        }
        setSelectGuests(`${value} Guests`)
        setCitiesFormPayload((prevState) => ({
            ...prevState,
            numberOfGuests: value
        }));
        setsearchModalState(false)
        document.querySelector("body").style.overflow = 'auto';

        let city = location
        let locationId = city === "Miami" ? 3 : city === "Aspen" ? 1 : city === "Fort-lauderdale" ? 6 : 1;

        if (city === 'Miami') { city = 'miami-vacation-homes' }
        else if (city === 'Aspen') { city = 'aspen-vacation-homes' }
        else { city = 'fort-lauderdale-vacation-homes' }

        const redirectUrl = `?noOfGuest=${value}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${locationId}&locationName=${location}&scrollPosition=${scrollPosition}`
        history.push({
            pathname: `${city}`,
            search: redirectUrl,
            state: { flexible: false, value: null }
        })
    }

    const handleSelect = (i) => {
        setSelected(i)
        setValue(i)
    }

    const guestsCountNumber = () => {
        const arr = []
        for (let i = 1; i <= 20; i++) {
            arr.push(
                <div onClick={() => handleSelect(i)} className={`${selected === i && 'active'}`}>
                    <p>{i}</p>
                </div>
            )
        }
        return arr
    }

    return (
        <SearchModal
            searchBarScreenActive={searchBarScreenActive}
        >
            <SearchVillasGuests>
                <div className='searchVillasGuests_heading'>
                    <h1>{width > 520 ? 'How many guests ?' : 'Select Guests'}</h1>
                    {handleCrossIcon()}
                </div>
                <div className='searchVillasGuests_slider'>
                    {width > 520
                        ? (
                            <Slider
                                min={1}
                                max={50}
                                value={value}
                                valueLabelDisplay="on"
                                onChange={(e) => setValue(e.target.value)}
                            />
                        )
                        : (
                            <div className='searchVillasGuests_slider_mobile-approach'>
                                {guestsCountNumber()}
                            </div>
                        )
                    }
                </div>
                <div className='searchVillasGuests_btn'>
                    <button onClick={handleGuestsCount}>Submit</button>
                </div>
            </SearchVillasGuests>
        </SearchModal>
    )
}

export default SearchVillas