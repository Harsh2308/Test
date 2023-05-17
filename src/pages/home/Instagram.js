import React, { useEffect, useState } from 'react';
import { getBrokerInstagram } from './apis';
import Skeleton from '@mui/material/Skeleton';
import { InstagramSectionContainer } from './style';

const Index = () => {
    const [instagramData, setInstagramData] = useState([])
    const [instagramLoading, setInstagramLoading] = useState(true)

    useEffect(() => {
        getBrokerInstagram(1, 1)
            .then((res) => {
                setInstagramLoading(false)
                setInstagramData(res.data.Data)
            }).catch((err) => console.log(err, console.log(err)))
    }, [])

    return (
        <InstagramSectionContainer>
            <div className='container'>
                <div className='instagram_section'>
                    <div className='instagram_section_heading'>
                        <h1>Our Instagram</h1>
                    </div>
                    <div className='instagram_section_gallary'>
                        {instagramLoading ? (
                            Array(9).fill(null)?.map((slide, index) => <Skeleton key={index} sx={{ bgcolor: '#303030' }} variant="rectangular" width='100%' height={350} />)
                        ) : (instagramData?.map((item, index) => {
                            return (
                                <div key={index} className='instagram_section_gallary_img'>
                                    <img src={item.Image} alt='pexels-pixabay-271681.jpg' />
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </InstagramSectionContainer>
    )
}

export default Index