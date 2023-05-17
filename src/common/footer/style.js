import styled from 'styled-components';
import { Denish, Avenir, DarkBGColor } from '../globalStyle';

export const FooterContainer = styled.div`
    padding-bottom: 152px;
    background-color: ${DarkBGColor};

    @media screen and (max-width : 991px) {
        padding: 0 15px;
        padding-top: 32px;
        padding-bottom: 54px;
    }

    .footer_section {
        padding-top: 80px;
        text-align: center;
        border-top: 2.40684px solid rgba(255, 255, 255, 0.2);
        
        @media screen and (max-width : 520px) {
            padding-top: 24px;
            border-top: 1.40684px solid rgba(255, 255, 255, 0.2);
        }

        p {
            margin: 0;
            font-size: 24px;
            font-weight: 400;
            line-height: 77px;
            font-style: normal;
            display: inline-block;
            font-family: ${Avenir};
            color: rgba(255, 255, 255, 0.5);
            &:hover {
                color: #FFFFFF;
            }

            @media screen and (max-width : 768px) {
                font-size: 16px;
                line-height: 32px;
            }
        }

        .reserved {
            display: block;
            @media screen and (min-width : 520px) {
                display: none;
            }
        }

        &_logo {
            max-width: 246px;
            margin-left: auto;
            margin-right: auto;
            img{
                width: 100%;
                height: auto;
                object-fit: cover;
            }

            @media screen and (max-width : 425px) {
                max-width: 170px;
            }
        }

        &_links {
            margin: 92px 0;

            @media screen and (max-width : 991px ) {
                margin: 40px 0;
            }  
            
            ul {
                padding: 0;
                display: flex;
                align-items: center;
                list-style-type: none;
                justify-content: space-between;

                @media screen and (max-width : 991px ) {
                    flex-direction: column;
                }

                li {
                    @media screen and (max-width : 768px ) {
                        margin-bottom: 16px;
                    }

                    .footerActiveClass {
                        color: #FFFFFF;
                        font-weight: 500;
                        @media screen and (max-width : 768px ) {
                            font-size: 20px;
                        }
                    }

                    p, a {
                        font-size: 32px;
                        cursor: pointer;
                        font-weight: 400;
                        line-height: 77px;
                        font-style: normal;
                        letter-spacing: 3px;
                        text-decoration: none;
                        font-family: ${Denish};
                        text-transform: uppercase;
                        color: rgba(255, 255, 255, 0.5);
                        &:hover {
                            color: #FFFFFF;
                        }

                        @media screen and (max-width : 768px ) {
                            font-size: 18px;
                            line-height: 32px;
                            letter-spacing: 3px;
                            text-transform: uppercase;
                        }
                    }
                }
            }
        }

        &_socialIcon {
            display: flex;
            align-items: center;
            margin-bottom: 80px;
            justify-content: space-between;

            @media screen  and (max-width : 768px) { 
                margin-bottom: 40px;
                padding-bottom: 40px;
                border-bottom: 1.40684px solid rgba(255, 255, 255, 0.2);
            }

            p {
                margin: 0;
                color: #FFFFFF;
                font-size: 32px;
                font-weight: 700;
                line-height: 77px;
                font-style: normal;
                font-family: ${Denish} !important;

                @media screen and (max-width : 991px){
                    display: none;
                }
            }
            
            &_icons {
                gap: 24px;
                display: flex;
                margin-left: auto;
                margin-right: auto;
                align-items: center;
                
                @media screen and (max-width : 768px){
                    gap: 8px;
                }

               &_icon {
                    max-width: 78px;
                    max-height: 78px;
                    @media screen and (max-width : 768px){
                        max-width: 48px;
                        max-height: 48px;
                    }

                    img {
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                        transition: all 0.5s;
                        &:hover {
                            cursor: pointer;
                            filter: invert(1);
                        }
                    }
                }  
            }
        }

        &_terms_mobile {
            display: flex;
            margin: 24px 0;
            padding: 0 15px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            p {
                color: #FFFFFF;
                font-size: 32px;
                font-weight: 700;
                line-height: 77px;
                font-style: normal;
                letter-spacing: 0.5px;
                font-family: ${Denish} !important;
                @media screen and (max-width : 768px){
                    font-size: 16px;
                    line-height: 22px;
                }
            }          
        }
    }
`