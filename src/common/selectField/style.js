import styled from "styled-components";
import { Avenir } from "../globalStyle";

export const SelectFieldContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 24px;

  .custom-select-inner {
    .ant-select-arrow svg {
      fill: #FFFFFF;
    }

    .ant-select-focused .ant-select-selector,
    .ant-select-selector:focus,
    .ant-select-selector:active,
    .ant-select-open .ant-select-selector {
      border-color: #FFFFFF !important;
    }

    .ant-select {
      width: 100%;
      
      .ant-select-selector {
        width: 100%;
        height: 56px;
        opacity: 0.9;
        display: flex;
        font-size: 16px;
        padding: 0 16px;
        border-radius: 0;
        font-weight: 400;
        box-shadow: none;
        line-height: 22px;
        font-style: normal;
        align-items: center;
        letter-spacing: 1px;
        font-family: ${Avenir};
        background: transparent;
        text-transform: capitalize;
        
        &:hover {
          border: 2px solid #FFFFFF !important; 
        }

        @media only screen and (max-width: 520px) {
          height: 48px;
          font-size: 14px;
          line-height: 17px;
        }

        .ant-select-selection-item {
          height: 100%;
          display: flex;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 400;
          line-height: 2px;
          font-style: normal;
          align-items: center;
          letter-spacing: 1px;
          font-family: ${Avenir};
          text-transform: capitalize;
          @media only screen and (max-width: 520px) {
            font-size: 14px;
            line-height: 17px;
          }
        }
        
        .ant-select-selection-placeholder {
          color: #FFFFFF;
        }
      }
    }
  }
`;