import React, { useEffect } from 'react'
import { SearchModalContainer } from './style';

const Index = (props) => {

    useEffect(() => {
        document.querySelector("body").style.overflow = 'hidden';
    }, [])

    return (
        <SearchModalContainer>
            <div className='searchModalContainer_content'>
                <div className='searchModalContainer_content_header'>
                    {props.handleLeftArrowIcon && props.handleLeftArrowIcon()}
                    <h1>{props.searchBarScreenActive === 1 ? 'Select City' : props.searchBarScreenActive === 2 ? 'Select Dates' : props.searchBarScreenActive === 3 ? '' : 'Search Villas'}</h1>
                    {props.handleCrossIcon && props.handleCrossIcon()}
                </div>
                <div className='searchModalContainer_content_body'>
                    {props.children}
                </div>
            </div>
        </SearchModalContainer>
    )
}

export default Index