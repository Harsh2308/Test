import styled from "styled-components";
import { Avenir } from "../globalStyle";

export const DatePickerContainer = styled.div`
  margin-bottom: 24px;

  .customdatepicker {
    .react-datepicker-wrapper {
      .react-datepicker__input-container {
        input {
          width: 100%;
          border: none;
          outline: none;
          color: #FFFFFF;
          padding: 0 16px;
          min-height: 56px;
          border-radius: 0px;
          -moz-appearance: none;
          font-family: ${Avenir};
          -webkit-appearance: none;
          background-position-x: 95%;
          background-repeat: no-repeat;
          background-position-y: center;
          background-color: transparent;
          border: 1px solid rgba(255, 255, 255, 0.6);
          background-image: url('images/calendar-outline.svg');
          @media screen and (max-width: 520px) {
            min-height: 48px;
          }

          ::placeholder {
            opacity: 0.9;
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};
            text-transform: capitalize;
          }
        }
      }
    }
  }
`;