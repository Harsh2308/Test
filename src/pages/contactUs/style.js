import styled from "styled-components";
import { Avenir, DarkBGColor, Denish } from "../../common/globalStyle";

export const ContactUsPage = styled.div`
    padding-top: 100px;
    background-color: ${DarkBGColor};
    @media only screen and (max-width: 520px) {
        padding-top: 89px;
        padding-bottom: 20px;
    }
    .contactus {
        &_bg {
            padding-top: 40px;
            padding-bottom: 80px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url("images/contact-us-webBG.png");
            @media only screen and (max-width: 520px) {
                padding-top: 0px;
                padding-bottom: 0px;
            }

            &_container {
                width: 100%;
                margin: auto;
                display: grid;
                max-width: 1131px;
                min-height: 888px;
                backdrop-filter: blur(5px);
                grid-template-columns: 1fr 1fr;
                background: rgba(0, 0, 0, 0.5);

                @media only screen and (max-width: 1024px) {
                    max-width: 920px;
                }

                @media only screen and (max-width: 768px) {
                    max-width: 520px;
                    padding-bottom: 88px;
                    grid-template-columns: 1fr;
                    background: rgba(0, 0, 0, 0.7);
                }
    
                &_leftside {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;

                    .contactus-form {
                        width: 100%;
                        max-width: 400px;
                        @media only screen and (max-width: 520px) {
                            max-width: 327px;
                        }

                        .main-title {
                            color: #FFFFFF;
                            font-size: 48px;
                            font-weight: 700;
                            line-height: 56px;
                            font-style: normal;
                            margin-bottom: 40px;
                            letter-spacing: 1px;
                            font-family: ${Denish};
                            @media only screen and (max-width: 768px) {
                                font-size: 40px;
                                font-weight: 500;
                                line-height: 23px;
                                text-align: center;
                                margin-bottom: 111px;
                            }
                        }

                        .fields-wrapper {
                            gap: 24px;
                            display: flex;
                            flex-direction: column;

                            .info {
                                gap: 10px;
                                display: flex;
                                flex-wrap: wrap;
                                align-items: center;
                                justify-content: space-between;

                                .item {
                                    gap: 12px;
                                    display: flex;
                                    color: #FFFFFF;
                                    font-size: 16px;
                                    font-weight: 800;
                                    line-height: 22px;
                                    font-style: normal;
                                    align-items: center;
                                    font-family: ${Avenir};
                                    @media only screen and (max-width: 768px) {
                                        gap: 8px;
                                        font-size: 14px;
                                        line-height: 19px;
                                    }
                                }
                            }

                            .form {
                                .btn-container {
                                    display: flex;
                                    margin-top: 40px;
                                    align-items: center;
                                    justify-content: flex-end;
                                    @media only screen and (max-width: 768px) {
                                        margin-top: 28px;
                                        justify-content: center;
                                    }

                                    button {
                                        height: 47px;
                                        width: 177px;
                                        border: none;
                                        color: #252525;
                                        font-size: 16px;
                                        font-weight: 700;
                                        line-height: 22px;
                                        text-align: center;
                                        font-style: normal;
                                        background: #FFFFFF;
                                        mix-blend-mode: normal;
                                        font-family: ${Denish};
                                        backdrop-filter: blur(2.85997px);
                                        &:hover {
                                            color: #FFFFFF;
                                            background: transparent;
                                            border: 1px solid white;
                                        }
                                        @media only screen and (max-width: 768px) {
                                            width: 231px;
                                            height: 56px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                &_rightside {
                    display: flex;
                    align-items: flex-end;
                    background-size: cover;
                    justify-content: center;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url("images/contact-us-modal.png");
                    @media only screen and (max-width: 768px) {
                        display: none;
                    }

                    h1 {
                        margin: 0;
                        color: #FFFFFF;
                        font-size: 88px;
                        font-weight: 600;
                        line-height: 104px;
                        font-style: normal;
                        letter-spacing: 1px;
                        font-family: ${Denish};
                        @media only screen and (max-width: 768px) {
                            font-size: 50px;
                            line-height: 59px;
                        }
                    }
                }
            }
        }
    }
`;