import styled from "styled-components";
import { Avenir, DarkBGColor, Denish } from "../../common/globalStyle";

export const YachtsPage = styled.div`
  background-color: ${DarkBGColor};
  
  .yachtPage {
    &_container {
      margin: auto;
      overflow: hidden;
      max-width: 1320px;
      @media screen and (max-width: 768px) {
        padding-left: 24px;
      }
      
      &_swiper-slider {
        position: relative;

        .swiper {
          position: unset;
          padding: 0px 38px;
          padding-top: 80px;
          padding-bottom: 80px;
          @media screen and (max-width: 768px) {
            padding: 0px 0px;
            padding-top: 80px;
            padding-bottom: 80px;
          }
          @media screen and (max-width: 520px) {
            padding-bottom: 0;
            padding-top: 55px;
          }
          
          .swiper-button-next.swiper-button-disabled,
          .swiper-button-prev.swiper-button-disabled {
            opacity: 1;
            display: none;
          }
          
          .swiper-button-prev {
            left: 0;
            margin: 0;
          }

          .swiper-button-next {
            right: 0;
            margin: 0;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 25px;
          }
          
        }
      }
    }
  }
`;

export const YachtStyledBanner = styled.div`
  width: 100%;
  display: flex;
  min-height: 441px;
  padding-top: 100px;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(images/yacthPageBG.png);

  @media screen and (max-width: 520px) {
    background-image: url(images/yachtimages/yachtmobileBg.png);
  }

  h1 {
    margin: 0;
    font-size: 60px;
    font-weight: 700;
    line-height: 120%;
    text-align: center;
    font-style: normal;
    letter-spacing: 1px;
    font-family: ${Denish};

    background: linear-gradient(180deg, rgba(255, 255, 255, 0.99) 0%, rgba(255, 255, 255, 0.78) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    @media screen and (max-width: 520px) {
      font-size: 42px;
    }
  }
`;

export const YachtRangeStyledSlider = styled.div`
  margin: auto;
  display: flex;
  padding: 0 100px;
  margin-top: 100px;
  max-width: 1280px;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: 520px) {
    padding: 0;
    margin-top: 50px;
    padding-right: 40px;
    flex-direction: column-reverse;
  }   

  .range-slider-box {
    width: 100%;
    height: 100%;

    img {
      @media screen and (max-width: 520px) {
        display: none;
      }   
    }

    .MuiSlider-root {
      height: 10px;
    }

    .MuiSlider-rail {
      height: 26px;
      border-radius: 0px;
      background: #404040;
      @media screen and (max-width: 520px) {
        height: 13px;
        // transform: translateY(5px);
      }
    }

    .MuiSlider-track {
      height: 26px;
      border-radius: 0px;
      background: #FFFFFF;
      @media screen and (max-width: 520px) {
        height: 13px;
        // transform: translateY(5px);
      }
    }

    .MuiSlider-mark {
      top: -24px;
      width: 2px;
      height: 32px;
      opacity: 0.12;
      color: #FFFFFF;
      border-radius: 10px;
      transition: all 0.8s ease;
      @media screen and (max-width: 520px) {
        top: 0px;
        height: 20px;
      }
    }

    .MuiSlider-markActive {
      opacity: 1;
    }

    .MuiSlider-markActive:last-child {
      opacity: 0.8 !important;
    }

    .MuiSlider-thumb {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background: #ffffff;
      box-shadow: 0px 4px 9px 3px rgba(0, 0, 0, 0.15);
      @media screen and (max-width: 520px) {
        width: 17px;
        height: 17px;
        // transform: translate(-5px, 4px);
        transform: translate(-5px, -8px);
      }

      .MuiSlider-valueLabel {
        top: 7px;
        left: 0px;
        height: 30px;
        background: #ffffff;
        transform: scale(-1);

        &:before {
          left: 73%;
        }

        @media screen and (max-width: 520px) {
          top: 25px;
          transform: scale(1);

          &:before {
            left: 17%;
            top: -25%;
          }
        }

        .MuiSlider-valueLabelCircle {
          transform: rotate(180deg);
          @media screen and (max-width: 520px) {
            transform: rotate(0);
          }
           
          .MuiSlider-valueLabelLabel {
            color: #262626;
            font-size: 20px;
            font-weight: 800;
            line-height: 27px;
            font-style: normal;
            font-family: ${Avenir};
            @media screen and (max-width: 520px) {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
`;

export const YachtStyledSlider = styled.div`
  width: 100%;
  height: 452px;
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 520px) {
    height: 342px;

    &:hover {
      transform: scale(1);
    }
  }

  &::before {
    top: 0;
    left: 0;
    width: 100%;
    content: '';
    z-index: -1;
    height: 100%;
    position: absolute;
    transition: all .3s ease;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(images/yachtimages/yachtcardBg.png);
  }

  .yachtStyledSlide {
    &_image {
      width: 100%;
      height: 212px;
      @media screen and (max-width: 520px) {
        height: 165px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &_body {
      padding: 25px 20px;
      border-radius: 2px;
      @media screen and (max-width: 1200px) {
        padding: 25px 10px;
      }
      @media screen and (max-width: 991px) {
        padding: 25px 30px;
      }
      @media screen and (max-width: 520px) {
        padding: 20px;
      }

      &_header {
        display: flex;
        color: #FFFFFF;
        justify-content: space-between;

        &_title {
          h3 {
            margin: 0;
            color: #FFFFFF;
            font-size: 27px;
            font-weight: 600;
            line-height: 32px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Denish};
            @media screen and (max-width: 520px) {
              font-size: 20px;
              line-height: 24px;
            }
          }
          p {
            margin: 0;
            font-size: 25px;
            margin-top: 4px;
            font-weight: 500;
            line-height: 34px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};
            @media screen and (max-width: 520px) {
              font-size: 18px;
              line-height: 25px;
            }
            span {
              font-size: 14px;
            }
          }
        }

        // div:last-child > p {
        //   margin: 0;
        //   font-size: 17px;
        //   font-weight: 500;
        //   line-height: 32px;
        //   font-style: normal;
        //   letter-spacing: 1px;
        //   font-family: ${Denish};
        //   @media screen and (max-width: 520px) {
        //     font-size: 12px;
        //     line-height: 25px;
        //   }
        // }
      }

      &_data {
        // gap: 12px;
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        margin-bottom: 10px;
        justify-content: center;
        @media screen and (max-width: 520px) {
          // gap: 8px;
          gap: 16px;
          margin-top: 24px;
        }

        &_box {
          gap: 4px;
          width: 100px;
          display: flex;
          color: #FFFFFF;
          min-height: 72px;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          backdrop-filter: blur(1.9207px);
          border: 0.392143px solid #C6C6C6;
          background: rgba(40, 40, 40, 0.3);
          @media screen and (max-width: 900px) {
            width: 78px;
          }

          @media screen and (max-width: 520px) {
            gap: 4px;
            width: 75px;
            min-height: 50px;
          }

          @media screen and (max-width: 320px) {
            width: 60px;
          }

          p:first-child {
            margin: 0;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};
            
            @media screen and (max-width: 520px) {
              font-size: 12px;
              line-height: 16px;
            }
          }

          p:last-child {
            margin: 0px;
            opacity: 0.7;
            font-size: 12px;
            font-weight: 200;
            line-height: 19px;
            font-style: normal;
            letter-spacing: 2px;
            font-family: SF Pro Text !important;
            @media screen and (max-width: 520px) {
              font-size: 10px;
              line-height: 12px;
            }
          }
        }
      }
    }
  }
`;

export const YachtSecretFleet = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: center;
  padding-bottom: 80px;
  justify-content: center;
    
  @media screen and (max-width: 520px) {
    padding-bottom: 16px;
  }
  
  .content {
    width: 100%;
    color: #FFFFFF;
    max-width: 574px;
    text-align: center;

    p {
      margin: 0;
      font-size: 48px;
      font-weight: 500;
      line-height: 64px;
      font-style: normal;
      margin-bottom: 40px;
      letter-spacing: 1px;
      font-family: ${Denish};

      @media screen and (max-width: 520px) {
        margin: auto;
        font-size: 20px;
        max-width: 271px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 34px;
      }
    }

    button {
      width: 100%;
      height: 72px;
      border: none;
      font-size: 24px;
      max-width: 430px;
      font-weight: 700;
      line-height: 140%;
      font-style: normal;
      letter-spacing: 1px;
      font-family: ${Denish};
      backdrop-filter: blur(3.5px);
      background: linear-gradient(0deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(92.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
      &:hover {
        background: linear-gradient(180deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(0deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(268.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
      }

      @media screen and (max-width: 520px) {
        height: 54px;
        font-size: 15px;
        max-width: 297px;
        font-weight: 500;
      }    
    }
  }    
`;