import styled from 'styled-components';
import { Avenir, Denish } from '../../common/globalStyle';

export const SearchVillasPlaces = styled.div`
    margin-top: 145px;
    @media screen and (max-width : 991px) {
        margin-top: 43px;
    }

    .searchVillas_content {
        width: 100%;
        margin: auto;
        max-width: 1053px;

        &_title {
            text-align: center;
            margin-bottom: 32px;
            @media screen and (max-width : 991px){ 
                font-size: 24px;
                text-align: left;
                margin-bottom: 16px;
            }

            h1 {
                margin: 0;
                width: 100%;
                color: #FFFFFF;
                font-size: 32px;
                font-weight: 700;
                line-height: 120%;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};
                @media screen and (max-width : 991px){ 
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 28px;
                }
            }
        }

        &_places {
            gap: 48px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            @media screen and (max-width : 991px) {
                gap: 16px;
                grid-template-columns: 1fr;
            }

            &_card {
                width: 100%;
                height: 100%;
                margin: auto;
                cursor: pointer;
                min-height: 307px;
                position: relative;

                @media screen and (max-width : 991px) {
                    min-height: 250px;
                }

                @media screen and (max-width : 520px) {
                    min-height: 104px;
                }

                p {
                    margin: 0;
                    bottom: 0;
                    z-index: 2;
                    width: 100%;
                    display: flex;
                    color: #FFFFFF;
                    font-size: 20px;
                    font-weight: 400;
                    min-height: 48px;
                    line-height: 130%;
                    font-style: normal;
                    position: absolute;
                    align-items: center;
                    letter-spacing: 1px;
                    font-family: ${Avenir};
                    justify-content: center;
                    backdrop-filter: blur(2px);
                    background: linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%);

                    @media screen and (max-width : 520px) {
                        font-size: 14px;
                        min-height: 25px;
                        font-weight: 500;
                        line-height: 18px;
                    }
                }

                &_1 {
                    height: 100%;
                    opacity: 0.6;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url(images/miami-popup_img.png);

                    &_active, &:hover {
                        opacity: 1;
                        outline: 2px solid rgba(255, 255, 255, 1);
                    }          
                }

                &_2 {
                    height: 100%;
                    opacity: 0.6;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url(images/fort-popup-img.png);

                    &_active, &:hover {
                        opacity: 1;
                        outline: 2px solid rgba(255, 255, 255, 1);
                    }
                }

                &_3 {
                    height: 100%;
                    opacity: 0.6;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url(images/aspen-popup-img.png);

                    &_active, &:hover {
                        opacity: 1;
                        outline: 2px solid rgba(255, 255, 255, 1);
                    }                    
                }
            }
        }

        &_btn-container {
            display: flex;
            margin-top: 32px;
            justify-content: flex-end;
    
            button {
                width: 100%;
                height: 57px;
                border: none;
                color: #222222;
                font-size: 18px;
                cursor: pointer;
                max-width: 125px;
                font-weight: 700;
                line-height: 24px;
                font-style: normal;
                background: #FFFFFF;
                letter-spacing: 1px;
                font-family: ${Denish};
                backdrop-filter: blur(4.18165px);
            }
        }
    }
`
export const SearchVillasDate = styled.div`
    width: 100%;
    margin: auto;
    max-width: 799px;
    margin-top: ${props => props.selectDate ? '40px' : '20px'};
    @media screen and (max-width : 520px) {
        margin-top: ${props => props.selectDate ? '35px' : '15px'};
    }

    .title {
        text-align: center;
        // margin-bottom: 32px;
        margin-bottom: 15px;
        @media screen and (max-width : 700px){ 
            font-size: 24px;
            text-align: left;
            margin-bottom: 16px;
        }

        h1 {
            margin: 0;
            width: 100%;
            color: #FFFFFF;
            font-size: 32px;
            font-weight: 700;
            line-height: 120%;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Denish};
            @media screen and (max-width : 700px){ 
                font-size: 24px;
                font-weight: 600;
                line-height: 28px;
            }
        }
    }

    .btn-container {
        display: flex;
        margin-top: 24px;
        justify-content: space-between;

        .back-btn {
            width: 125px;
            height: 57px;
            border: none;
            display: flex;
            color: #FFFFFF;
            font-size: 18px;
            cursor: pointer;
            font-weight: 700;
            line-height: 24px;
            font-style: normal;
            letter-spacing: 1px;
            align-items: center;
            font-family: ${Denish};
            justify-content: center;
            backdrop-filter: blur(3.5px);
            background: rgba(168, 168, 168, 0.2);
        }

        .next-btn {
            width: 100%;
            height: 68px;
            border: none;
            color: #222222;
            font-size: 20px;
            cursor: pointer;
            max-width: 254px;
            font-weight: 700;
            line-height: 24px;
            font-style: normal;
            background: #FFFFFF;
            letter-spacing: 1px;
            font-family: ${Denish};
            transition: transform 300ms ease 100ms;
            backdrop-filter: blur(4.18165px);
            &:hover {
                color: #FFFFFF;
                background: transparent;
                border: 1px solid white;
            }
            @media screen and (max-width : 700px) {
                height: 57px;
                font-size: 18px;
                max-width: 125px;
            }
        }
    }
`
export const SearchVillasGuests = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 30px;
    max-width: 800px;
    background: rgba(37, 37, 37, 0.8);
    box-shadow: 9.87062px 3.70148px 27.1442px 12.3383px rgba(0, 0, 0, 0.13);

    .searchVillasGuests {
        &_heading {
            padding-top: 40px;
            position: relative;
            text-align: center;
            padding-bottom: 24px;
            border-bottom: 1px solid #4E4E4E;
            @media screen and (max-width : 520px) {
                border-bottom: none;
            }

            h1 {
                margin: 0;
                color: #FFFFFF;
                font-size: 32px;
                font-weight: 700;
                line-height: 120%;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};
                @media screen and (max-width : 520px) {
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 28px;
                }
            }

            img {
                top: 24px;
                right: 24px;
                width: 32px;
                height: 28px;
                cursor: pointer;
                position: absolute;
                @media screen and (max-width : 520px) {
                    top: 20px;
                    right: 20px;
                    width: 24px;
                    height: 22px;
                }
            }
        }

        &_slider {
            padding: 60px 40px;
            @media screen and (max-width : 520px) {
                padding: 24px;
            }

            .MuiSlider-root {
                height: 13px;
                color: #FFFFFF;
                border-radius: 2px;

                .MuiSlider-rail {
                    opacity: 1;
                }

                .MuiSlider-thumb {
                    background: #262626;
                    border-radius: 15px;
                    border: 3px solid #FFFFFF;
                    box-shadow: 0px 4px 9px 3px rgba(0, 0, 0, 0.15);

                    .MuiSlider-valueLabel {
                        width: 46px;
                        height: 30px;
                        color: #262626;
                        border-radius: 2px;
                        background: #FFFFFF;

                        .MuiSlider-valueLabelLabel {
                            font-size: 20px;
                            font-weight: 800;
                            line-height: 27px;
                            font-style: normal;
                            background: #FFFFFF;
                            font-family: ${Avenir};
                        }
                    }
                }
            }

            &_mobile-approach {
                display: flex;
                height: 304px;
                color: #FFFFFF;
                padding-top: 12px;
                overflow-y: scroll;
                align-items: center;
                flex-direction: column;
                border: 1px solid #FFFFFF;

                &::-webkit-scrollbar {
                    width: 5px;
                    height: 5px;
                }
                
                &::-webkit-scrollbar-track {
                    border-radius: 0px;
                }
                
                &::-webkit-scrollbar-thumb {
                    background: #FFFFFF;
                }
                
                &::-webkit-slider-thumb:hover {
                    opacity: 0.2;
                    background: #D9D9D9;
                }

                div {
                    width: 100%;
                    min-height: 46px;
                    padding-top: 12px;
                    text-align: center;
                    border-bottom: 1px solid rgba(255,255,255,0.5);

                    p {
                        margin: 0;
                        font-size: 18px;
                        font-weight: 800;
                        line-height: 120%;
                        font-style: normal;
                        font-family: ${Avenir};
                    }
                }

                .active {
                    color: #262626;
                    background: #FFFFFF;
                }
            }
        }

        &_btn {
            display: flex;
            align-items: center;
            padding-bottom: 50px;
            justify-content: center;
            @media screen and (max-width : 520px) {
                padding-bottom: 32px;
            }

            button {
                width: 254px;
                height: 68px;
                border: none;
                color: #222222;
                font-size: 20px;
                font-weight: 700;
                line-height: 24px;
                font-style: normal;
                text-align: center;
                background: #FFFFFF;
                font-family: ${Denish};
                backdrop-filter: blur(4.18165px);
                &:hover {
                    color: #FFFFFF;
                    background: transparent;
                    border: 1px solid white;
                }

                @media screen and (max-width : 520px) {
                    width: 125px;
                    height: 57px;
                    font-size: 18px;
                }
            }
        }
    }
`