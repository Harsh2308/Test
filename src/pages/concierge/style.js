import styled from "styled-components";
import { Avenir, DarkBGColor, Denish } from "../../common/globalStyle";

export const ConciergePage = styled.div`
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: ${DarkBGColor};
  @media screen and (max-width: 768px) {
    padding-top: 90px;
    padding-bottom: 0px;
  }
  
  .title {
    margin: 0;
    color: #FFFFFF;
    font-size: 48px;
    padding: 80px 0;  
    font-weight: 700;
    line-height: 56px;
    font-style: normal;
    text-align: center;
    letter-spacing: 1px;
    font-family: ${Denish};
    @media screen and (max-width: 520px) {
      font-size: 32px;
      line-height: 36px;
      text-align: start;
      padding: 32px 20px;
    }
  }

  .concierge {
    &_services-slider {
      padding: 10px;
      background-color: black;
      @media screen and (max-width: 850px) {
        padding: 0px;
      }

      .vertical-slider {
        margin: auto;
        max-width: 1440px;
        height: calc(100vh - 118px);

        @media screen and (max-width: 850px) {
          height: 713px;
        }

        .swiper-slide {
          background: #151515;
        }

        .swiper-pagination {
          display: flex;
          padding: 0 10px;
          text-align: left;
          flex-direction: column;
          
          @media screen and (max-width: 850px) {
            text-align: right;
          }

          .swiper-pagination-current, .swiper-pagination-total {
            font-size: 18px;
            font-weight: 700;
            line-height: 21px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: Roboto Condensed !important;
          }

          .swiper-pagination-current {
            color: #FFFFFF;
          }

          .swiper-pagination-total {
            color: #3d3d3d;
          }
        }
      }
    }
  }    
`;

export const ConciergeSlideStyledContent = styled.div`
  top: 99px;
  width: 100%;
  height: 100%;
  display: grid;
  background: #151515;
  margin-bottom: 14px;
  justify-content: center;
  height: calc(100vh - 118px);
  grid-template-columns: minmax(0, 570px) minmax(0, 855px);

  @media screen and (max-width: 850px) {
    padding: 0;
    margin-bottom: 30px;
    grid-template-columns: 1fr;
  }

  .text {
    display: flex;
    margin: 0 auto;
    max-width: 470px;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 850px) {
      order: 2;
      max-width: auto;
      padding: 14px 24px 30px 24px;
    }

    .concierge-heading {
      color: #FFFFFF;
      font-size: 56px;
      font-weight: 700;
      line-height: 72px;
      font-style: normal;
      letter-spacing: 1px;
      margin-bottom: 40px;
      font-family: ${Denish};

      @media screen and (max-width: 991px) {
        font-size: 40px;
        line-height: 52px;
        margin-bottom: 30px;
      }

      @media screen and (max-width: 850px) {
        font-size: 24px;
        line-height: 43px;
        margin-bottom: 12px;
      }
    }

    .concierge-para {
      opacity: 0.9;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 400;
      line-height: 140%;
      font-style: normal;
      margin-bottom: 64px;
      letter-spacing: 1px;
      font-family: ${Avenir};

      @media screen and (max-width: 850px) {
        font-size: 13px;
        line-height: 150%;
        margin-bottom: 14px;
      }
    }

    .reserve-btn {
      height: 58px;
      width: 199px;
      color: #FFFFFF;
      font-size: 16px;
      cursor: pointer;
      font-weight: 700;
      line-height: 140%;
      font-style: normal;
      text-align: center;
      letter-spacing: 1px;
      display: inline-block;
      mix-blend-mode: normal;
      font-family: ${Denish};
      background: transparent;
      border: 1px solid #FFFFFF;
      backdrop-filter: blur(4.18165px);
      &:hover {
        color: #252525;
        background: #FFFFFF;
      }
      @media screen and (max-width: 850px) {
        height: 44px;
        width: 110px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }

  .image {
    height: 100%;
    min-height: 342px;
    @media screen and (max-width: 850px) {
      min-height: 267px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .numbering {
    gap: 8px;
    margin-bottom: 6px;
    left: 15px;
    width: 18px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 850px) {
      gap: 5px;
      left: unset;
      right: 15px;
    }

    p, span {
      margin: 0;
      color: #FFFFFF;
      font-size: 18px;
      font-weight: 700;
      line-height: 21px;
      font-style: normal;
      font-family: ${Avenir};
      @media screen and (max-width: 850px) {
        font-size: 14px;
      }
    }

    span {
      color: #3D3D3D;
    }

    p:last-child {
      color: #3D3D3D;
    }
  }
`;

export const ConciergeFormStyledServices = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  @media screen and (max-width: 520px) {
    margin-top: 130px;
  }
  .sliper_wrapper_first {
    grid-template-columns: 1fr !important;
  }
  
  .slider_wrapper {
    gap: 32px;
    margin: auto;
    display: grid;
    max-width: 1280px;
    min-height: 726px;
    grid-template-columns: 440px 2px minmax(0, 816px);
    @media screen and (max-width: 1300px) {
      max-width: 990px;
    }
    
    
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .form {
      width: 100%;
      height: 100%;
      margin: auto;
      padding: 41px 0;
      max-width: 440px;
      @media screen and (max-width: 520px) {
        padding: 0px;
        max-width: 319px;
      }
  
      &_container {
        > h1 {
          margin: 0;
          opacity: 0.9;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          font-style: normal;
          letter-spacing: 1px;
          font-family: ${Avenir};
        }
  
        .checkBoxes {
          display: grid;
          margin: 25px 0;
          position: relative;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  
          .controlLabel {
            .checkbox {
              height: 20px;
              color: #FFFFFF;
              
              > span {
                border: none;
                background: none !important;
              }
            }
          }
  
          .checkboxLabel {
            color: #FFFFFF;
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};
          }

          .is-invalid {
            bottom: -20px;
            color: #FFFFFF;
            position: absolute;
            font-family: ${Avenir};
          }
        }
  
        .btn-container {
          display: flex;
          margin-top: 40px;
          align-items: center;
          justify-content: flex-end;
  
          button {
            height: 47px;
            width: 177px;
            border: none;
            color: #252525;
            font-size: 16px;
            font-weight: 700;
            line-height: 140%;
            font-style: normal;
            text-align: center;
            background: #FFFFFF;
            letter-spacing: 1px;
            mix-blend-mode: normal;
            font-family: ${Denish};
            backdrop-filter: blur(2.85997px);
            &:hover {
              color: #FFFFFF;
              background: transparent;
              border: 1px solid white;
            }
  
            @media screen and (max-width: 520px) {
              width: 115px;
              height: 36px;
              font-size: 14px;
            }
          }
        }
      }
    }
  
    .separator {
      background: rgba(255, 255, 255, 0.6);
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  
    .services {
      display: grid;
      grid-template-columns: repeat(${props => props.repeat - 1}, 1fr) 4fr;
      @media screen and (max-width: 768px) {
        display: none;
      }
      &_logo {
        display: flex;
        align-items: center;
        justify-content: center;
  
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &_service {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;