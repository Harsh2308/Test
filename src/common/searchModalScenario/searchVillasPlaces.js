import React, { useState } from 'react'
import { urlData } from 'common/urlData';
import { SearchVillasPlaces } from './style';
import SearchModal from 'common/searchModal';
import { useHistory, useLocation } from 'react-router-dom';

const { lowerValue, upperValue, guestCount, scrollPosition, startDate, endDate, sort } = urlData;

const Index = (props) => {
    const history = useHistory()
    const location = useLocation()
    const [place, setPlace] = useState()
    const query = new URLSearchParams(location.search)
    const [width, setWidth] = useState(window.innerWidth)
    const noOfGuest = query.get("noOfGuest")
    const checkInDate = query.get("checkInDate")
    const checkOutDate = query.get("checkOutDate")
    const { selectCity, searchData, setBtnText, fromNavbar, fromFooter, setSearchData, handleCrossIcon, handleNextButton, setSearchModalState, handleLeftArrowIcon, searchBarScreenActive, setSearchBarScreenActive } = props

    window.addEventListener('resize', function () {
        setWidth(window.innerWidth);
    });

    const handlePlacesCard = (city) => {
        if (fromNavbar || fromFooter) {
            const place = city;
            setSearchModalState(false)
            document.querySelector("body").style.overflow = 'auto';
            let locationId = city === "Miami" ? 3 : city === "Aspen" ? 1 : city === "Fort-lauderdale" ? 6 : 1;

            if (city === 'Miami') { city = 'miami-vacation-homes' }
            else if (city === 'Aspen') { city = 'aspen-vacation-homes' }
            else { city = 'fort-lauderdale-vacation-homes' }
            const redirectUrl = `?noOfGuest=${guestCount}&checkInDate=${startDate}&checkOutDate=${endDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${locationId}&locationName=${place}&scrollPosition=${scrollPosition}`
            history.push({
                pathname: `/${city}`,
                search: redirectUrl,
                state: { flexible: false, value: null }
            })
        }
        else if (selectCity) {
            const place = city;
            setSearchModalState(false)
            document.querySelector("body").style.overflow = 'auto';
            let locationId = city === "Miami" ? 3 : city === "Aspen" ? 1 : city === "Fort-lauderdale" ? 6 : 1;

            if (city === 'Miami') { city = 'miami-vacation-homes' }
            else if (city === 'Aspen') { city = 'aspen-vacation-homes' }
            else { city = 'fort-lauderdale-vacation-homes' }

            const redirectUrl = `?noOfGuest=${noOfGuest}&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&sortOrder=${sort}&lowerValue=${lowerValue}&upperValue=${upperValue}&location=${locationId}&locationName=${place}&scrollPosition=${scrollPosition}`
            history.push({
                pathname: `${city}`,
                search: redirectUrl,
                state: { flexible: false, value: null }
            })
        }
        else if (width < 520) {
            setPlace(city)
            setBtnText('Next')
            setSearchData({ ...searchData, place: city })
        }
        else {
            setPlace(city)
            setSearchData({ ...searchData, place: city })
            setSearchBarScreenActive(searchBarScreenActive + 1)
        }
    }

    return (
        <SearchModal
            handleCrossIcon={width > 520 && handleCrossIcon}
            handleLeftArrowIcon={width < 520 && handleLeftArrowIcon}
            searchBarScreenActive={selectCity && searchBarScreenActive}
        >
            <SearchVillasPlaces>
                <div className='searchVillas_content'>
                    <div className='searchVillas_content_title'>
                        <h1>{selectCity ? '' : 'Where to?'}</h1>
                    </div>
                    <div className='searchVillas_content_places'>
                        <div className='searchVillas_content_places_card'>
                            <p>Miami</p>
                            <div onClick={() => handlePlacesCard('Miami')} className={place === 'Miami' ? 'searchVillas_content_places_card_1 searchVillas_content_places_card_1_active' : 'searchVillas_content_places_card_1'}>
                            </div>
                        </div>
                        <div className='searchVillas_content_places_card'>
                            <p>Fort Lauderdale</p>
                            <div onClick={() => handlePlacesCard('Fort-lauderdale')} className={place === 'Fort-lauderdale' ? 'searchVillas_content_places_card_2 searchVillas_content_places_card_2_active' : 'searchVillas_content_places_card_2'}>
                            </div>
                        </div>
                        <div className='searchVillas_content_places_card'>
                            <p>Aspen</p>
                            <div onClick={() => handlePlacesCard('Aspen')} className={place === 'Aspen' ? 'searchVillas_content_places_card_3 searchVillas_content_places_card_3_active' : 'searchVillas_content_places_card_3'}>
                            </div>
                        </div>
                    </div>
                    <div className='searchVillas_content_btn-container'>
                        {width < 520 && Object.keys(searchData).length !== 0 && handleNextButton()}
                    </div>
                </div>
            </SearchVillasPlaces>
        </SearchModal>
    )
}

export default Index