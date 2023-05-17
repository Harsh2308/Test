import styled from "styled-components";
import { Avenir, DarkBGColor, Denish } from "../../common/globalStyle";

export const YachtDetailPage = styled.div`
    padding-top: 100px;
    background-color: ${DarkBGColor};
    @media screen and (max-width: 768px) {
        padding-top: 90px;
    }
`;

export const YachtStyledBanner = styled.div`
    min-height: 574px;
    position: relative;
    background-size: cover;
    background-color: #E3E3E3;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props => props.bgImg});

    button {
        right: 100px;
        bottom: 30px;
        width: 178px;
        height: 52px;
        border: none;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 500;
        line-height: 140%;
        position: absolute;
        font-style: normal;
        letter-spacing: 1px;
        font-family: ${Denish};
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8.15152px);
        @media screen and (max-width: 520px) {
            width: 100px;
            height: 33px;
            font-size: 10px;
        }
    }   
`;

export const YachtMbStyledSlider = styled.div`
    position: relative;

    .yacht-slider {
        // height: 574px;
        position: unset;
        background: #e3e3e3;

        @media screen and (max-width: 768px) {
            // height: 474px;
        }

        @media screen and (max-width: 520px) {
            // height: 397px;
            background: transparent;
        }

        .swiper-slide {
            aspect-ratio: 16/9;
            // display: flex;
            // align-items: center;
            // justify-content: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }        
        }

        .swiper-pagination {
            display: none;
            @media screen and (max-width: 520px) {
                bottom: -40px;
                display: block;
            }
      
            .swiper-pagination-bullet {
                opacity: 1;
                width: 8px;
                height: 8px;
                border-radius: 3.5px;
                transition: all 0.5s ease;
                background: rgba(255, 255, 255, 0.7);      
            }
        
            .swiper-pagination-bullet.swiper-pagination-bullet-active {
                width: 28px;
                height: 8px;
                background: #FFFFFF;
                border-radius: 3.5px;
            } 
        }
    }
`;

export const YachtStyledContent = styled.div`
    margin: auto;
    display: grid;
    max-width: 1240px;
    padding-top: 67px;
    padding-bottom: 80px;
    grid-template-columns: 1fr minmax(0, 379px);

    @media screen and (max-width: 520px) {
        padding-top: 50px;
        padding-bottom: 0;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    .content {
        width: 100%;
        max-width: 640px;
        @media screen and (max-width: 1024px) {
            max-width: 570px;
        }

        @media screen and (max-width: 520px) {
            max-width: 375px;
        }

        hr {
            margin: 0;
            opacity: 0.5;
            border: 0.5px solid rgba(255, 255, 255, 0.2);
        }
    
        h3 {
            margin: 0;
            color: #FFFFFF;
            font-size: 24px;
            font-weight: 400;
            line-height: 33px;
            font-style: normal;
            letter-spacing: 1px;
            margin-bottom: 24px;
            font-family: ${Avenir};
            @media screen and (max-width: 520px) {
                font-size: 16px;
                line-height: 22px;
                margin-bottom: 16px;
            }
        }

        &_yachtDetail {
            padding-bottom: 40px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            @media screen and (max-width: 520px) {
                border: none;
                padding-left: 16px;
                padding-bottom: 32px;
            }

            &_heading {
                margin: 0;
                color: #FFFFFF;
                font-size: 36px;
                font-weight: 700;
                line-height: 24px;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};

                @media screen and (max-width: 520px) {
                    font-size: 24px;
                    font-weight: 500;
                }

                span>span {
                    font-size: 14px;
                    font-weight: 500;
                }
            }

            &_data {
                gap: 32px;
                display: flex;
                margin-top: 24px;
                align-items: center;
                @media screen and (max-width: 520px) {
                    gap: 16px;
                    margin-top: 16px;
                }

                > div {
                    gap: 4px;
                    display: flex;
                    align-items: center;
                }

                p {
                    margin: 0;
                    color: #FFFFFF;
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 120%;
                    font-style: normal;
                    letter-spacing: 0.5px;
                    font-family: ${Avenir};
                    @media screen and (max-width: 520px) {
                        font-size: 14px;
                        line-height: 19px;
                    }
                }
            }
        }

        &_rates {
            padding: 40px 0px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            @media screen and (max-width: 520px) {
                border: none;
                padding: 32px 16px;
            }

            h3 {
                @media screen and (max-width: 520px) { 
                    color: #FFFFFF;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 17px;
                    font-style: normal;
                    letter-spacing: 1px;
                    font-family: SF Pro Text;
                }
            }

            &_data {
                gap: 22px;
                display: flex;
                align-items: center;
                @media screen and (max-width: 520px) {
                    gap: 15px;
                    flex-wrap: wrap;
                }
                
                > div {
                    gap: 4px;
                    display: flex;
                    align-items: center;
                }

                p {
                    margin: 0;
                    color: #FFFFFF;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 24px;
                    font-style: normal;
                    letter-spacing: 1px;
                    font-family: SF Pro Text;
                    @media screen and (max-width: 520px) {
                        font-size: 18px;
                        line-height: 21px;
                    }

                    span {
                        font-size: 14px;
                        font-weight: 300;
                    }
                }
            }
        }

        &_ammenities {
            padding: 40px 0px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);

            @media screen and (max-width: 520px) {
                border: none;
                padding: 32px 24px;
            }
            
            &_data {
                gap: 34px;
                display: grid;
                grid-template-columns: repeat(7,1fr);

                @media screen and (max-width: 1024px) {
                    gap: 25px;
                    grid-template-columns: repeat(5, 1fr);
                }
                @media screen and (max-width: 520px) {
                    grid-template-columns: repeat(4, 1fr);
                }
                @media screen and (max-width: 320px) {
                    grid-template-columns: repeat(3, 1fr);
                }

                &_ammenity {
                    width: 60px;

                    p {
                        margin: 0;
                        color: #FFFFFF;
                        font-size: 16px;
                        margin-top: 8px;
                        font-weight: 400;
                        line-height: 22px;
                        font-style: normal;
                        text-align: center;
                        letter-spacing: 1px;
                        font-family: ${Avenir};
                        @media screen and (max-width: 520px) {
                            font-size: 14px;
                            line-height: 19px;
                        }
                    }
                }
            }
        }

        &_description {
            padding-top: 40px;
            @media screen and (max-width: 520px) {
                padding-top: 32px;
                padding-left: 24px;
                padding-right: 24px;
            }
            
            p {
                margin: 0;
                opacity: 0.9;
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 400;
                line-height: 140%;
                font-style: normal;
                font-family: ${Avenir};
                @media screen and (max-width: 520px) {
                    font-size: 14px;
                }
            }
        }
    }
`;

export const ViewAllPhotosContainer = styled.div`
    margin: 20px 20px 20px;
    padding: 30px 30px 0 30px;
    
    .swiper-wrapper {
        height: calc(100vh - 110px);
        .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            aspect-ration: 16/9 !important;
            img {
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
    }    

    .swiper-button-prev, .swiper-button-next {
        top: 0;
        margin: 0;
        width: 60px;
        height: 100%;
        opacity: 0.6;
        mix-blend-mode: normal;
        &:after {
            font-size: 25px;
        }
    }    
      
    .swiper-button-prev {
        left: 0;
        // background: linear-gradient(90deg, #0F0F0F 0%, rgba(39,39,39,0.0001) 100%);
    }
  
    .swiper-button-next {
        right: 0;
        // background: linear-gradient(90deg, rgba(39, 39, 39, 0.0001) 0%, #0F0F0F 100%);
    }    
    
    .swiper-pagination {
        bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: center;

        .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 0px;
            display: block !important;
        }
    }      
`;

export const InquiryMobBox = styled.div`
    gap: 9px;
    width: 100%;
    margin: auto;
    display: none;
    max-width: 328px;
    margin-top: 32px;
    flex-direction: column;

    @media screen and (max-width: 991px) {
        left: 50%;
        bottom: 0;
        z-index: 1;
        display: flex;
        position: fixed;
        background: #262626;
        padding-bottom: 15px;
        transform: translate(-50%, 0%);
    }

    @media screen and (max-width: 320px) {
        max-width: 290px;
    }

    button {
        height: 56px;
        border: none;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        font-style: normal;
        font-family: ${Denish};
        backdrop-filter: blur(3.5px);
        background: linear-gradient(0deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(92.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
    }

    p {
        margin: 0;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        font-style: normal;
        text-align: center;
        letter-spacing: 1px;
        font-family: ${Avenir};
        text-transform: capitalize;
    }
`;