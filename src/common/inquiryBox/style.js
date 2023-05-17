import styled from "styled-components";
import { Avenir, Denish, LightGrayBGColor } from "../globalStyle";

export const InquiryBoxContainer = styled.div`
  top: 125px;
  position: sticky;

  .inquire {
    &_box {
      top: 125px;
      width: 100%;
      max-width: 380px;
      position: sticky;
      padding: 20px 24px;
      background: #363636;
      box-shadow: 0px 4px 7px rgb(255 255 255 / 5%);
    
      @media screen and (max-width: 991px) {
        display: none;
      }    
    
      &_body {
        position: relative;
        padding: 25px 13px;
        mix-blend-mode: normal;
        background: ${LightGrayBGColor};
        border: 0.4px solid rgba(255, 255, 255, 0.6);    

        &_banner {
          top: 0;
          right: 0;
          width: 136px;
          height: 30px;
          display: flex;
          position: absolute;
          align-items: center;
          background: #FFFFFF;
          justify-content: center;

          p {
            margin: 0;
            color: #2C2C2C;
            font-size: 14px;
            font-weight: 500;
            line-height: 19px;
            font-style: normal;
            font-family: ${Avenir};
            letter-spacing: 0.364311px;
          }
        }

        &_header {
          gap: 6px;
          display: flex;
          color: #FFFFFF;
          flex-direction: column;

          h4 {
            margin: 0;
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 400;
            line-height: 19px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};    
          }  

          p {
            margin: 0;
            font-size: 16px;
            font-weight: 800;
            line-height: 22px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};

            span {
              opacity: 0.9;
              font-weight: 400;
              margin-left: 5px;
              font-family: ${Avenir};
            }
          }     
        }

        &_inputsPicker {
          gap: 12px;
          display: flex;
          margin-top: 20px;

          .inputsPicker_one, .inputsPicker_two {
            width: 100%;

            .startDate, .endDate, .selectDate {
              gap: 8px;
              height: 40px;
              outline: none;
              display: flex;
              color: #FFFFFF;
              font-size: 14px;
              cursor: pointer;
              padding: 0 10px;
              font-weight: 400;
              line-height: 120%;
              font-style: normal;
              align-items: center;
              letter-spacing: 1px;
              font-family: ${Avenir};
              border: 1px solid rgba(255, 255, 255, 0.6);

              img {
                widht: 17px;
                height: 15px;
              }
            }

            .ant-select {
              width: 100%;
              .ant-select-selector {
                width: 100%;
                height: 40px;
                box-shadow: none;
                border-radius: 0px;
                background: transparent;
                border: 1px solid rgba(255,255,255,0.6);

                &:hover {
                  border: 1px solid #FFFFFF;
                }
        
                .ant-select-selection-item {
                  height: 100%;
                  display: flex;
                  color: #FFFFFF;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 120%;
                  font-style: normal;
                  align-items: center;
                  letter-spacing: 1px;
                  font-family: ${Avenir};
                }
              }
              .ant-select-arrow {
                color: #FFFFFF !important;
              }
            }

            .div {
              margin-bottom: 25px;
            }    
          }

          label {
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 400;
            line-height: 120%;
            font-style: normal;
            margin-bottom: 12px;
            letter-spacing: 1px;
            font-family: ${Avenir};
            text-transform: uppercase;
          }          

          .react-datepicker__input-container {
            height: 40px;
            padding: 0 10px;

            input {
              width: 100%;
              height: 100%;
              border: none;
              outline: none;
              color: #FFFFFF;
              font-size: 14px;
              font-weight: 400;
              line-height: 120%;
              font-style: normal;
              padding-left: 20px;
              letter-spacing: 1px;
              font-family: ${Avenir};
              background: transparent;
              background-repeat: no-repeat;
              background-position: left center;
              background-image: url(images/datepicker.svg);

              ::placeholder {
                color: #FFFFFF;
              }
            }      
          }  
        }

        &_bottom {
          gap: 8px;
          display: flex;
          margin-top: 32px;
          flex-direction: column;

          button {
            height: 36px;
            border: none;
            color: #252525;
            font-size: 14px;
            font-weight: 700;
            line-height: 140%;
            font-style: normal;
            text-align: center;
            background: #FFFFFF;
            letter-spacing: 1px;
            font-family: ${Denish};    
            backdrop-filter: blur(2.85997px);
          }      

          p {
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 400;
            line-height: 120%;
            font-style: normal;
            text-align: center;
            letter-spacing: 1px;
            font-family: ${Avenir};
          }    
        }
      }
    }
  }    
`;