import styled from "styled-components";
import { DarkBGColor, LightWhiteColor, Avenir, LightGrayColor, Denish } from "../../common/globalStyle";

export const PropertyDetailsContainer = styled.div`
  padding-top: 100px;
  background-color: ${DarkBGColor};
  @media screen and (max-width: 520px) {
    padding-top: 90px;
    overflow: hidden;
  }

  .emptyDataSelection {
    gap: 20px;
    display: grid;
    padding-top: 110px;
    grid-template-columns: repeat(3, 1fr);

    &_interface {
      display: flex;
      flex-direction: column;
    }
  }

  .propertyDetailPage_showCase {
    @media screen and (min-width: 769px) {
      &_header_slider {
        display: none;
      }
    }

    &_images {
      gap: 8px;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;


      @media screen and (max-width: 768px) {
        display: none;
      }

      &_one {
        width: 100%;
        height: 100%;
        overflow: hidden;
        min-height: 459px;

        img {
          width: 100%;
          height: 100%;
        
          object-fit: cover;
          transition: transform 300ms ease 100ms;
          &:hover {
            transform: scale(1.15);
          }           
        }
      }

      &_two {
        gap: 8px;
        height: 100%;
        display: grid;
        position: relative;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;

        .image-container:nth-child(4) {
          opacity: 0.8;
        }

        .image-container {
          width: 100%;
          min-height: 230px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        &_for_btn {
          top: 75%;
          left: 75%;
          position: absolute;
          transform: translate(-50%, -50%);

          &_viewAllImageBtn {
            width: 178px;
            height: 52px;
            border: none;
            outline: none;
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 500;
            line-height: 140%;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Denish};
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(8.15152px);
            transition: all 0.8s ease;
            @media screen and (max-width: 768px) {
              width: 100px;
              height: 33px;
              font-size: 10px;
              backdrop-filter: blur(2px);
            }
          }
          &_viewAllImageBtn:hover{
            width: 220px;
            height: 65px;
            font-size: 18px;
          }
        }
      }
    }

    &_details {
      &_content {
        padding: 0;
        h1 {
          font-size: 26px;
          font-weight: 700;
          line-height: 32px;
          font-style: normal;
          letter-spacing: 1px;
          margin-bottom: 24px;
          font-family: ${Denish};
          color: ${LightWhiteColor};
          @media screen and (max-width: 768px) {
            font-size: 24px;
            font-weight: 500;
            line-height: 24px;
          }
        }
        span {
          margin: 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 140%;
          font-style: normal;
          letter-spacing: 1px;
          font-family: ${Avenir};
          color: ${LightWhiteColor};
          @media screen and (max-width: 520px) {
            font-size: 14px;
          }
        }

        &_info {
          margin: 0;
          display: flex;
          padding: 0 60px;
          max-width: 100vw;
          justify-content: space-between;
          @media screen and (max-width: 1100px) {
            padding: 0 24px;
          }
          @media screen and (max-width: 768px) {
            padding: 0;
          }

          &_one {
            padding: 0;
            width: 100%;
            margin-top: 80px;
            max-width: 800px;
            @media screen and (max-width: 1300px) {
              max-width: 700px;
            }
            @media screen and (max-width: 1200px) {
              max-width: 600px;
            }
            @media screen and (max-width: 1100px) {
              max-width: 565px;
            }
            @media screen and (max-width: 768px) {
              margin-top: 24px;
            }

            &_bedroomLayout {
              padding: 40px 0px;
              border-bottom: 1px solid rgba(255, 255, 255, 0.2);
              @media screen and (max-width: 768px) {
                padding: 31px 12px;
              }

              .swiper-button-next, .swiper-button-prev {
                top: 0;
                margin: 0;
                width: 104px;
                height: 100%;
                mix-blend-mode: normal;
                &::after {
                  font-size: 25px;
                }
                
                @media screen and (max-width: 1024px) {
                  width: 82px;
                }
              }

              .swiper-button-prev {
                left: 0;
                background: linear-gradient(90deg, rgba(15, 15, 15, 0.82) 0%, rgba(39, 39, 39, 0.47) 100%);
              }

              .swiper-button-next {
                right: 0;
                background: linear-gradient(90deg, rgba(39, 39, 39, 0.47) 0%, rgba(15, 15, 15, 0.82) 100%);
              }
            }
          }

          &_two {
            padding: 0;
            width: 100%;
            max-width: 380px;
            margin-top: 52px;

            &_modal {
              top: 0;
              position: sticky;
            }

            @media screen and (max-width: 768px) {
              display: none;
            }
          }
        }

        &_villa {
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          @media screen and (max-width: 768px) {
            padding-left: 24px;
            padding-bottom: 31px;
          }
          h1 {
            margin-bottom: 8px;
          }
          .city {
            margin: 0;
            display: none;
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            margin-bottom: 8px;
            font-style: normal;
            letter-spacing: 1px;
            font-family: ${Avenir};
            @media screen and (max-width: 768px) {
              display: block;
            }
          }
          &_attribute {
            gap: 24px;
            display: flex;
            align-items: center;
  
            &_span {
              gap: 4px;
              display: flex;
              align-items: center;
              margin-bottom: 24px;
  
              p {
                margin: 0;
                font-size: 18px;
                font-weight: 400;
                line-height: 120%;
                font-style: normal;
                font-family: ${Avenir};
                color: ${LightWhiteColor};
                @media screen and (max-width: 520px) {
                  font-size: 14px;
                }
              }
            }
          }

          &_desc {
            &_btn {
              cursor: pointer;
              font-weight: bolder;
              text-decoration: underline;
              color: ${LightWhiteColor} !important;
            }
          }
        }

        &_ammenities_section {
          padding: 40px 0px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          @media screen and (max-width: 768px) {
            padding: 31px 24px;
          }

          &_ammenities {
            gap: 34px;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            @media screen and (max-width: 1300px) {
              grid-template-columns: repeat(6, 1fr);
            }
            @media screen and (max-width: 1200px) {
              grid-template-columns: repeat(5, 1fr);
            }

            @media screen and (max-width: 1024px) and (min-width: 768px) {
              gap: 24px;
              grid-template-columns: repeat(5, 1fr);
            }

            @media screen and (max-width: 425px) {
              gap: 14px;
              grid-template-columns: repeat(4, 1fr);
            }

            &_ammeniti {
              width: 60px;
              img {
                width: 60px;
                height: 60px;
                padding: 5px;
                object-fit: contain;
                object-position: center;
                background-color: ${LightGrayColor};
              }
              p {
                margin: 0;
                color: #FFFFFF;
                font-size: 16px;
                margin-top: 8px;
                font-weight: 400;
                line-height: 22px;
                font-style: normal;
                text-align: center;
                letter-spacing: 1px;
                font-family: ${Avenir};
                @media screen and (max-width: 768px) {
                  font-size: 14px;
                  line-height: 19px;
                }
              }
            }
          }
        }

        &_map_section {
          padding: 40px 0px;
          border-bottom: 0.725738px solid rgba(255, 255, 255, 0.2);
          @media screen and (max-width: 768px) {
            padding: 31px 0px;

            h1 {
              padding-left: 24px;
            }
          }
        }

        &_calendar_section {
          padding: 40px 0;
          @media screen and (max-width: 768px) {
            padding: 31px 24px;

            .nav-tabs {
              display: none;

              .react-datepicker__current-month {
                padding-top: 10px;
              }
            }
          }
        }

        &_similar_product_section {
          padding-left: 60px;
          padding-bottom: 115px;
          @media screen and (max-width: 1100px) {
            padding-left: 24px;
          }
          @media screen and (max-width: 768px) {
            padding-left: 24px;
            paddisng-bottom: 50px;
          }
          h1 {
            font-size: 48px;
            line-height: 56px;
            text-align: center;
            margin-bottom: 80px;
            @media screen and (max-width: 768px) {
              margin-bottom;
              font-size: 24px;
              text-align: left;
              line-height: 22px;
              margin-bottom: 32px;
            }
          }
        }
      }
    }
  }

  .propertyDetailPage_mbInquire {
    bottom: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    position: fixed;
    padding: 15px 32px;
    background: #252525;
    align-items: center;
    border-top: 1px solid #FFFFFF;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
      display: none;
    }

    &_content {
      opacity: 0.9;
      h1 {
        margin: 0;
        font-size: 14px;
        font-weight: 300;
        line-height: 19px;
        font-style: normal;
        letter-spacing: 1px;
        font-family: ${Avenir};
        color: ${LightWhiteColor};
      }
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 8px;
        font-style: normal;
        letter-spacing: 1px;
        font-family: ${Avenir};
        color: ${LightWhiteColor};
      }
      h6 {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        font-style: normal;
        letter-spacing: 1px;
        font-family: ${Avenir};
        color: ${LightWhiteColor};
        border-bottom: 1px solid ${LightWhiteColor};
      }
    }
    &_btn {
      gap: 4px;
      display: flex;
      flex-direction: column;

      button {
        width: 134px;
        border: none;
        height: 52px;
        outline: none;
        color: #252525;
        font-size: 14px;
        font-weight: 700;
        line-height: 140%;
        border-radius: 0px;
        font-style: normal;
        background: #FFFFFF;
        font-family: ${Denish};
        text-transform: capitalize;
        backdrop-filter: blur(3.17029px);
      }
      span {
        opacity: 0.9;
        color: #FFFFFF;
        font-weight: 400;
        line-height: 120%;
        font-style: normal;
        font-size: 11.5683px;
        font-family: ${Avenir};
      }
    }
  }
`;

export const BedRoomCardContainer = styled.div`
  width: 100%;
  cursor: pointer;

  .bedroom  {
    aspect-ratio: 16/9;
    margin-bottom: 12px;
    @media screen and (max-width: 768px) {
      margin-bottom: 8px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 27px;
    font-style: normal;
    margin-bottom: 2px;
    letter-spacing: 1px;
    font-family: ${Avenir};
    color: ${LightWhiteColor};
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 19px;
    }
  }

  p {
    margin: 0;
    opacity: 0.8;
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    font-style: normal;
    letter-spacing: 1px;
    font-family: ${Avenir};
    color: ${LightWhiteColor};
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 19px;
    }
  }
`;

export const HomeMarkerIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  background: rgb(255, 56, 92);
  box-shadow: 0 2px 4px rgba(0,0,0,0.18);

  div {
    left: 50%;
    width: 12px;
    bottom: -1px;
    height: 12px;
    position: absolute;
    border-radius: 2px;
    transform: translate(-50%, 0px) rotate(45deg);
    background: linear-gradient(135deg, rgba(0, 0, 0, 0) 50%, rgb(255, 56, 92) 50%);
  }
`