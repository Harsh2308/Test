import styled from 'styled-components';
import { Denish, Avenir } from '../globalStyle';

export const LocationCardContainer = styled.div`
    width: 100%;
    height: 263px;
    cursor: pointer;
    max-width: 424px;
    position: relative;
   
    @media screen and (max-width : 520px){
        max-width: 241px;
    }

    .card-img {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .card_footer {
        width: 100%;
        bottom: 0px;
        display: flex;
        min-height: 76px;
        padding: 0px 16px;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        backdrop-filter: blur(4px);
        background: linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%);
        @media screen and (max-width : 520px){
            backdrop-filter: none;
            backdrop-filter: blur(3.5px);
        }

        h1 {
            margin: 0;
            color: #FFFFFF;
            font-size: 18px;
            font-weight: 700;
            line-height: 130%;
            font-style: normal;
            margin-bottom: 8px;
            letter-spacing: 1px;
            font-family: ${Denish};
            @media screen and (max-width : 768px) { 
                font-size: 16px;
                // font-weight: 500;
                line-height: 20px;
            }
        }

        &_text {
            gap: 8px;
            margin: 0;
            padding: 0;
            opacity: 0.9;
            display: flex;
            align-items: center;
            list-style-type: none;

            @media screen and (max-width : 768px) { 
                flex-direction: row-reverse;
                justify-content: space-between;
            }

            &_li {
                margin: 0;
                color: #FFFFFF;
                font-size: 16px;
                font-weight: 400;
                line-height: 120%;
                font-style: normal;
                white-space: nowrap;
                letter-spacing: 1px;
                font-family: ${Avenir};
                @media screen and (max-width : 768px) { 
                    font-size: 14px;
                    line-height: 18px;
                    letter-spacing: 0px;
                }
                
                ::before {
                    width: 2px;
                    height: 2px;
                    content: '';
                    color: #999;
                    font-size: 5px;
                    margin-right: 5px;
                    border-radius: 50%;
                    display: inline-block;
                    transform: translateY(-4px);
                    background: rgba(255, 255, 255, 0.5);
                }
            }
        }
    }
`