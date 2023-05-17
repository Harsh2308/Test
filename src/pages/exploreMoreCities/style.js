import styled from 'styled-components';
import { Denish } from '../../common/globalStyle';

export const ExploreMoreCities = styled.div`
    padding: 80px 0;
    text-align: center;
    @media screen and (max-width : 520px) {
        padding: 0;
        padding-top: 32px;
    }

    .exploreMoreCity {
        &_title {
            margin-top: 80px;
            margin-bottom: 80px;
            @media screen and (max-width : 768px) {
                margin-bottom: 32px;
            }

            h1 {
                margin: 0;
                color: #FFFFFF;
                font-size: 48px;
                font-weight: 700;
                line-height: 56px;
                font-style: normal;
                text-align: center;
                font-family: ${Denish};
                @media screen and (max-width : 768px) {
                    font-size: 32px;
                    font-weight: 400;
                    line-height: 120%;
                }
            }
        }

        &_web {
            gap: 24px;
            display: flex;
            flex-direction: column;

            @media screen and (max-width : 768px) {
                display: none;
            }
        }

        &_mobile {
            display: none;
            @media screen and (max-width : 768px) {
                display: block;
                padding-left: 24px;
                
                .swiper-slide {
                    width: 297px !important;

                    h1 {
                        font-weight: 500;
                    }
                }
            }
            @media screen and (max-width : 425px) {
                padding-left: 37px
            }
            @media screen and (max-width : 376px) {
                padding-left: 19px
            }
        }
    }
`

export const ExploreCityWebCard = styled.div`
    position: relative;

    h1 {
        top: 50%;
        left: 50%;
        margin: 0;
        z-index: 2;
        color: #FFFFFF;
        font-size: 28px;
        font-weight: 700;
        line-height: 36px;
        position: absolute;
        font-style: normal;
        text-align: center;
        font-family: ${Denish};
        transform: translate(-50%, -50%);
        background: linear-gradient(180deg, #FFFFFF 44.27%, rgba(255, 255, 255, 0.23) 100%);
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .cityBG {
        opacity: 0.6;
        height: 296px;
        cursor: pointer;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${props => props.bgImage});

        &_active, &:hover {
            opacity: 1;
            outline: 2px solid rgba(255, 255, 255, 1);
        }  
    }
`

export const ExploreCityMobileCard = styled.div`
    min-height: 269px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.bgImage});

    h1 {
        margin: 0;
        bottom: 0;
        width: 100%;
        height: 56px;
        display: flex;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 700;
        line-height: 130%;
        position: absolute;
        font-style: normal;
        align-items: center;
        font-family: ${Denish};
        justify-content: center;
        backdrop-filter: blur(3.5px);
        background: linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%);
    }
`