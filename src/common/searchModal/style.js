import styled from 'styled-components';
import { Denish } from '../globalStyle';

export const SearchModalContainer = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    position: fixed;
    overflow-y: auto;
    padding: 30px 70px;
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.8);

    &::-webkit-scrollbar {
        width: 0px;
        height: 0px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: transparent;
    }
    
    &::-webkit-slider-thumb:hover {
        background: transparent;
    }

    @media screen and (max-width : 991px) {
        padding: 30px;
    }

    @media screen and (max-width : 991px) {
        padding: 40px 30px;
        background: rgba(0, 0, 0, 0.6);
    }

    .searchModalContainer_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &_header {
            position: relative;

            h1 {
                margin: 0;
                color: #FFFFFF;
                font-size: 48px;
                font-weight: 700;
                line-height: 56px;
                font-style: normal;
                text-align: center;
                letter-spacing: 1px;
                font-family: ${Denish};
                @media screen and (max-width : 991px){
                    font-size: 28px;
                    // margin-top: 50px;
                    line-height: 30px;
                }
            }

            .left-icon {
                top: 0;
                width: 32px;
                height: 32px;
                cursor: pointer;
                position: absolute;
                @media screen and (max-width : 991px) {
                    width: 22px;
                    height: 22px;
                }
            }

            .cross-icon {
                top: 0;
                right: 0;
                width: 32px;
                height: 32px;
                cursor: pointer;
                position: absolute;
                @media screen and (max-width : 991px) {
                    width: 22px;
                    height: 22px;
                }
            }
        }
    }
`