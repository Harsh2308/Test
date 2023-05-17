import styled from 'styled-components';
import { Avenir, BorderColor, Denish, LightWhiteColor } from '../globalStyle';

export const ViewAllPhotosSliderMobileContainer = styled.div`
    @media screen and (min-width : 767px) {
        display: none;
    }

    .viewAllPhotosSliderMobile {
        &_heading {
            text-align: center;
            margin-left: 24px;
            margin-right: 24px;
            padding-bottom: 25px;
            border-bottom: 1px solid ${BorderColor};
            
            h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                line-height: 28px;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};
                color: ${LightWhiteColor};
                transform: translateY(5px);
            }
            @media screen and (max-width: 586px) {
                padding-top: 20px;
                margin: 0px;
                position: sticky;
                top: 0;
                background: #262626;
                z-index: 2;
            }
        }

        &_layout {
            gap: 16px;
            display: flex;
            padding-top: 32px;
            flex-direction: column;

            &_slider {
                max-height:204px;
                margin-top:30px;
                // padding-bottom:30px;
                p {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 22px;
                    margin-left: 24px;
                    margin-bottom: 8px;
                    font-style: normal;
                    letter-spacing: 1px;
                    font-family: ${Avenir};
                    color: ${LightWhiteColor};
                }

                .swiper {        
                    .swiper-slide-active {
                        .images {
                            img {
                                width: 100%;
                                height: 100%;
                                object-fit: cover;
                            }
                        }
                    }

                    .swiper-button-prev, .swiper-button-next {
                        top: 0;
                        margin: 0;
                        width: 40px;
                        height: 100%;
                        opacity: 0.7;
                        mix-blend-mode: normal;
                        &:after {
                            font-size: 16px;
                            font-weight: 900;
                        }
                    }
                  
                    .swiper-button-prev {
                        left: 0;
                        background: linear-gradient(90deg, #0F0F0F 0%, rgba(39,39,39,0.0001) 100%);
                    }
                  
                    .swiper-button-next {
                        right: 0;
                        background: linear-gradient(90deg, rgba(39, 39, 39, 0.0001) 0%, #0F0F0F 100%);
                    }
                
                    .swiper-pagination {
                        bottom: 13px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                
                        .swiper-pagination-bullet {
                            width: 5px;
                            height: 5px;
                            background: white;
                            border-radius: 0px;
                            display: block !important;
                        }
                    }
                }
            }
        }
    }
`