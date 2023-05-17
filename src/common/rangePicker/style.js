import styled from 'styled-components';
import { Denish } from '../globalStyle';

export const RangePickerContainer = styled.div`
    background: rgba(37, 37, 37, 0.8);
    box-shadow: 9.87062px 3.70148px 27.1442px 12.3383px rgba(0, 0, 0, 0.13);

    .searchVillasDateTabs {
        .customRangePickerTabStyle {
            min-height: 460px;

            @media screen and (max-width:768px) {
                min-height: 300px;
            }
        }
        
        .nav-tabs {
            height: 100%;
            display: flex;
            flex-wrap: unset;
            align-items: center;
            flex-direction: row; 
            justify-content: center;
            
            .nav-item {
                width: 100%;
                height: 100%;

                .nav-link {
                    color: #FFFFFF;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 19px;
                    font-style: normal;
                    letter-spacing: 1px;
                    background: #313131;
                    border-radius: unset;
                    font-family: ${Denish};
                    text-transform: capitalize;
                    backdrop-filter: blur(4.27674px);
                    @media screen and (max-width:768px) {
                        font-size: 14px;
                        line-height: 17px;
                    }
                }

                .nav-link.active {
                    color: #262626;
                    font-size: 16px;
                    font-weight: 700;
                    line-height: 19px;
                    font-style: normal;
                    letter-spacing: 1px;
                    background: #FFFFFF;
                    mix-blend-mode: normal;
                    font-family: ${Denish};
                    backdrop-filter: blur(4.27674px);
                    @media screen and (max-width:768px) {
                        font-size: 14px;
                        line-height: 17px;
                    }
                }

                button {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    margin: 0 auto;
                    padding: 16px 0;
                    @media screen and (max-width:768px) {
                        padding: 13px 0;
                    }
                }            
            }
        }

        &_flexibleSlot {
            width: 100%;
            height: 100%;
            display: flex;
            margin: 0 auto;
            max-width: 538px;
            min-height: 332px;
            flex-direction: column;
            justify-content: center;

            @media screen and (max-width:768px) {
                max-width: 265px;
                min-height: 202px;
            }

            h1 {
                margin: 0;
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 400;
                text-align: left;
                line-height: 19px;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};
                text-transform: uppercase;
                @media screen and (max-width:768px) {
                    font-size: 12px;
                    line-height: 14px;
                }    
            }

            hr {
                height: 1px;
                opacity: 0.8;
                margin: 24px 0;
                background: #FFFFFF;
                @media screen and (max-width:768px) {
                    margin: 20px 0;
                } 
            }

            .btn-group {
                gap: 32px;
                width: 100%;

                @media screen and (max-width : 768px) {
                    gap: 24px;
                }

                button {
                    width: 250px;
                    height: 91px;
                    outline: none;
                    color: #FFFFFF;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 130%;
                    font-style: normal;
                    border-radius: unset;
                    font-family: ${Denish};
                    border: 1px solid #FFFFFF;
                    transition-duration: 0.3s;
                    background: rgba(37, 37, 37, 0.8);
                    
                    @media screen and (max-width : 768px) {
                        width: 120px;
                        height: 45px;
                        font-size: 14px;
                    }

                    &:hover {
                        color: #262626;
                        background: #FFFFFF;
                    }
                }
                
                button:last-child {
                    color: #DFDFDF;
                    &:hover {
                        color: #262626;
                    }
                }

                .active {
                    color: #262626;
                    background: #FFFFFF;
                }
            }
        }
    }
`