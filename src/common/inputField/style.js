import styled from "styled-components";
import { Avenir } from "../globalStyle";

export const InputFieldContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 24px;

  .ant-input {
    width: 100%;
    height: 56px;
    opacity: 0.9;
    color: #FFFFFF;
    font-size: 16px;
    padding: 0 16px;
    border-radius: 0;
    font-weight: 400;
    box-shadow: none;
    line-height: 22px;
    font-style: normal;  
    letter-spacing: 1px;
    font-family: ${Avenir};
    background: transparent;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
    }

    @media only screen and (max-width: 520px) {
      height: 48px;
      font-size: 14px;
      line-height: 17px;
    }

    ::placeholder {
      color: #FFFFFF;
    }

    &:hover, &:focus {
      border: 2px solid #FFFFFF;
    }
  }
`;