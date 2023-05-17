import styled from 'styled-components';
import { DarkBGColor, Avenir, Denish } from '../globalStyle';

export const SiderCardContainer = styled.div`
    width: 100%;
    background-color: ${DarkBGColor};
    transition: transform 300ms ease 100ms;
    max-width: ${props => props.max ? props.max : '336px'};
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
    }

    .swiper {
        .swiper-button-prev, .swiper-button-next {
            width: 30px;
            height: 30px;
            margin-left: 0px;
            margin-right: 0px;
            border-radius: 50%;
            background: #e9e3e3;
            outline: 1px solid #262626;
            &::after {
                color: #262626;
                font-weight: 900;
                font-size: 12px !important;
            }
        }
        
        .swiper-pagination {
            bottom: 5px;
            .swiper-pagination-bullet {
                width: 7px;
                height: 7px;
                opacity: 0.5;
                border-radius: 0;
                border: 1px solid white;
                background: transparent;
                @media screen and (max-width: 520px) {
                    width: 4px;
                    height: 4px;
                }
            }
            
            .swiper-pagination-bullet-active {
                opacity: 1;
                background: #FFFFFF;
            }

        }
    }

    .spaceCard_detail {
        padding: 16px 12px;
        mix-blend-mode: normal;
        backdrop-filter: blur(1.74265px);
        background: linear-gradient(0deg, #353535, #353535), linear-gradient(227.37deg, #FFFFFF 8.66%, rgba(255, 255, 255, 0) 96.9%);

        > h2 {
            margin: 0;
            color: #FFFFFF;
            font-size: 18px;
            font-weight: 700;
            line-height: 130%;
            font-style: normal;
            margin-bottom: 13px;
            letter-spacing: 1px;
            font-family: ${Denish};
            @media screen and (max-width: 520px) {
                font-weight: 500;
                margin-bottom: 8px;
            }
        }

        &_card {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;   

            &_package {
                text-align: left;

                p {
                    margin: 0;
                    opacity: 0.95;
                    color: #FFFFFF;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 120%;
                    font-style: normal;
                    margin-bottom: 11px;
                    letter-spacing: 1px;
                    font-family: ${Avenir};

                    > span {
                        font-size: 15px;
                        margin-left: 3px;
                        line-height: 130%;
                        
                        span {
                            margin-left: 0;
                            font-size: 14px;
                            @media screen and (max-width: 520px) {
                                font-size: 13px;
                            }
                        }
                    }

                    @media screen and (max-width: 520px) {
                        font-size: 12px;
                        margin-bottom: 9px;
                    }
                }       

                &_service {
                    gap: 8px;
                    display: flex;
                    
                    p {
                        margin: 0;
                        letter-spacing: 1px;
                        @media screen and (max-width: 520px) {
                            font-size: 14px;
                        }
                    }
                    
                    &_one {
                        gap: 4px;
                        display: flex;
                        align-items: center;                   
                    }

                    &_two {
                        gap: 4px;
                        display: flex;
                        align-items: center;
                    }
                }
            }

            &_btn {
                button {
                    width: 115px;
                    height: 36px;
                    color: #FFFFFF;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 140%;
                    font-style: normal;
                    font-family: ${Denish};
                    border: 1px solid #FFFFFF;
                    background-color: transparent;
                    &:hover {
                        color: #252525;
                        background: #FFFFFF;
                    }
                    
                    @media screen and (max-width: 520px) {
                        width: 100px;
                        height: 35px;
                        color: #252525;
                        font-size: 14px;
                        font-weight: 700;
                        background: #FFFFFF;
                    }
                    @media screen and (max-width: 426px) {
                        width: 105px;
                        height: 38px;
                        color: #252525;
                        font-size: 14px;
                        font-weight: 700;
                        background: #FFFFFF;
                    }
                }
            }
        }
    }
`

export const SliderImageContainer = styled.div`
    height: 184px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.sliderImage});

    .space_slider_image_container_badge {
        width: 136px;
        height: 30px;
        float: right;
        display: flex;
        background: #FFFFFF;
        align-items: center;
        justify-content: center;

        p {
            margin: 0;
            color: #2C2C2C;
            font-size: 14px;
            font-weight: 500;
            line-height: 19px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};
        }
    }

    .space_slider_image_container_heading {
        bottom: 0;
        width: 100%;
        height: 25px;
        position: absolute;
        backdrop-filter: blur(2px);
        background: rgba(0, 0, 0, 0.08);
  
        h3 {
            float: right;
            margin: 3px 12px;
            font-weight: 400;
            line-height: 120%;
            font-style: normal;
            font-family: ${Avenir};
            font-size: 16px !important;
            color: rgba(255, 255, 255, 0.9);
            @media screen and (max-width: 520px) {
                font-size: 14px !important;
            }
        }
    }   
`