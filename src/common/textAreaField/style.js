import styled from "styled-components";
import { Avenir } from "../globalStyle";

export const TextAreaContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 24px;

    .customTextArea .ant-input{
        width: 100%;
        resize: none;
        opacity: 0.9;
        height: 160px;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        font-style: normal;
        padding: 19px 16px;
        letter-spacing: 1px;
        font-family: ${Avenir};
        background: transparent;

        ::placeholder {
            color: #FFFFFF;
        }

        &:hover, &:focus {
            border: 2px solid #FFFFFF;
        }

        @media only screen and (max-width: 520px) {
            font-size: 14px;
            line-height: 17px;
        }
    }
`