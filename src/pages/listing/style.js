import styled from "styled-components";
import { Denish, DarkBGColor, Avenir, LightWhiteColor, BlurryBackgroundLight } from "../../common/globalStyle";

export const ListingPage = styled.div`
  background-color: ${DarkBGColor};

  .listingPageResults {
    width: 100%;
    margin: auto;
    max-width: 1440px;

    &_content {
      display: grid;
      padding-top: 60px;
      padding-left: 48px;
      grid-template-columns: 1fr 1fr;
      // position: relative;
      
      @media screen and (max-width: 890px) {
        padding-left: 24px;
        padding-right: 24px;
        grid-template-columns: 1fr;
      }
      
      @media screen and (max-width: 520px) {
        padding-left: 0;
        padding-right: 0;
        padding-top: 32px;
      }
  
      &_cities {
        @media screen and (max-width: 520px) {
          margin: auto;
          max-width: 327px;
        }
        @media screen and (max-width: 320px) {
          max-width: 272px;
        }
        h1 {
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 400;
          line-height: 120%;
          font-style: normal;
          margin-bottom: 24px;
          letter-spacing: 1px;
          font-family: ${Avenir};
          @media screen and (max-width: 520px) {
            float: right;
            font-size: 14px;
          }
        }

        &_cards {
          width: 100%;
          display: flex;
          row-gap: 16px;
          flex-wrap: wrap;
          column-gap: 24px;
        }
      }
  
      &_map {
        // right: 0;
        // top: 80px;
        // max-width: 666px;
        padding-top: 48px;
        // position: absolute;
        top: 51px;
        width: 100%;
        position: sticky;
        // padding-top: 80px;
        max-height: 860px;
        padding-left: 50px;

        @media screen and (max-width: 1050px) {
          max-width: 600px;
          padding-left: 0px;
        }
        @media screen and (max-width: 991px) {
          max-width: 550px;
        }
        @media screen and (max-width: 991px) {
          max-width: 500px;
        }
        @media screen and (max-width: 890px) {
          display: none;
        }

        // >div>div>div {
        //   background: transparent !important;
        // }
  
        .gm-style-iw-a {
          .gm-style-iw.gm-style-iw-c {
            padding: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            filter: drop-shadow(0px 4px 54px #000000);
  
            .gm-style-iw-d {
              overflow: hidden !important;
            }
  
            .gm-ui-hover-effect {
              border-radius: 50%;
              top: 5px !important;
              left: 10px !important;
              width: 24px !important;
              height: 24px !important;
              display: none !important;
              align-items: center !important;
              justify-content: center !important;
              background: rgba(0,0,0,0.4) !important;
              
              span {
                margin: 0px !important;
                background: white !important;
              }
            }
          }
  
          .gm-style-iw-tc::after {
            display: none;
          }
        }
      }
    }
  }
`;

export const ListingPageBanner = styled.div`
  display: flex;
  cursor: pointer;
  min-height: 470px;
  padding-bottom: 30px;
  align-items: flex-end;
  background-size: cover;
  transition: .3s ease-in-out;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgImage});
  &:hover {
    opacity: 0.9;
  }
  
  @media screen and (max-width: 750px) {
    min-height: 270px;
    padding-bottom: 0;
    visibility: hidden;
  }

  .cities_city_selection_content {
    gap: 66px;
    width: 100%;
    display: flex;
    flex-direction: column;

    &_heading {
      @media screen and (max-width: 750px) {
        display: none;
      }

      h1 {
        background: linear-gradient(
          180deg,
          #ffffff 0%,
          rgba(255, 255, 255, 0.7) 100%
        );
        margin: 0;
        font-size: 60px;
        font-weight: 700;
        line-height: 120%;
        text-align: center;
        font-style: normal;
        letter-spacing: 1px;
        background-clip: text;
        font-family: ${Denish};
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    &_data {
      gap: 16px;
      width: 100%;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 750px) {
        padding: 0 24px;
        visibility: visible;
        align-items: center;
        flex-direction: column;
      }

      &_left {
        width: 100%;
        height: 59px;
        display: flex;
        cursor: pointer;
        max-width: 261px;
        padding: 0px 20px;
        align-items: center;
        ${BlurryBackgroundLight};
        justify-content: space-between;
        border: 1px solid rgba(255,255,255,0.6);
        @media screen and (max-width: 750px) {
          max-width: unset;
        }
        @media screen and (max-width: 520px) {
          height: 56px;
          padding: 0 8px;
          max-width: 327px;
          margin-bottom: 16px;
          background: transparent;
          border: 1px solid rgba(255, 255, 255,0.6);
        }

        p {
          margin: 0;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 500;
          line-height: 120%;
          font-style: normal;
          letter-spacing: 1px;
          font-family: ${Denish};
          text-transform: capitalize;
        }

        div {
          width: 20px;
          height: 20px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: right center;
          background-image: url(images/location-icon.svg);
          @media screen and (max-width: 520px) {
            width: 24px;
            height: 24px;
            background-image: url(images/downArrow.svg);
          }
        }

        select {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          font-size: 18px;
          font-weight: 400;
          box-shadow: none;
          appearance: none;
          line-height: 120%;
          font-style: normal;
          letter-spacing: 1px;
          font-family: ${Denish};
          color: ${LightWhiteColor};
          background-repeat: no-repeat;
          background-color: transparent;
          background-position: right center;
          background-image: url(images/location-icon.svg);
        }
      }

      &_right {
        gap: 16px;
        width: 100%;
        display: flex;
        max-width: 540px;
        align-items: center;
        @media screen and (max-width: 750px) {
          max-width: unset;
        }
        @media screen and (max-width: 520px) {
          gap: 12px;
          justify-content: center;
          flex-direction: row-reverse;
        }
        
        h6 {
          left: 0;
          margin: 0;
          bottom: 60px;
          display: none;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 400;
          line-height: 120%;
          font-style: normal;
          position: absolute;
          letter-spacing: 1px;
          font-family: ${Avenir};
          @media screen and (max-width: 520px) {
            display: block;
            font-size: 14px;
          }
        }

        p {
          margin: 0;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 400;
          line-height: 120%;
          font-style: normal;
          letter-spacing: 1px;
          font-family: ${Avenir};
          @media screen and (max-width: 520px) {
            font-size: 14px;
          }
        }

        &_one {
          width: 100%;
          height: 59px;
          display: flex;
          padding: 0 20px;
          cursor: pointer;
          max-width: 290px;
          position: relative;
          align-items: center;
          ${BlurryBackgroundLight};
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255,0.6);
          @media screen and (max-width: 750px) {
            max-width: unset;
          }
          @media screen and (max-width: 520px) {
            gap: 12px;
            height: 56px;
            padding: 0 8px;
            max-width: 158px;
            background: transparent;
            justify-content: flex-end;
            flex-direction: row-reverse;
          }

          div {
            width: 20px;
            height: 20px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(images/guests-icon.svg);
            @media screen and (max-width: 520px) {
              width: 16px;
              height: 16px;
            }
          }
        }

        &_two {
          width: 100%;
          height: 59px;
          display: flex;
          cursor: pointer;
          max-width: 250px;
          padding: 0px 20px;
          position: relative;
          align-items: center;
          ${BlurryBackgroundLight};
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.6);
          @media screen and (max-width: 750px) {
            max-width: unset;
          }
          @media screen and (max-width: 520px) {
            gap: 12px;
            padding: 0 8px;
            max-width: 158px;
            background: transparent;
            justify-content: flex-end;
            flex-direction: row-reverse;
          }

          div {
            width: 20px;
            height: 20px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url(images/date-icon.svg);
            @media screen and (max-width: 520px) {
              width: 16px;
              height: 16px;
            }
          }

          .react-datepicker__input-container {
            border: none;

            input {
              color: white;
              border: none;
              outline: none;
              font-size: 16px;
              font-weight: 400;
              line-height: 120%;
              font-style: normal;
              letter-spacing: 0.8px;
              font-family: ${Avenir};
              background: transparent;
              background-position-x: right;
              background-repeat: no-repeat;
              background-image: url(images/date-icon.svg);
            }

            input::-webkit-input-placeholder{
              color: white;
              font-size: 16px;
              font-weight: 400;
              line-height: 120%;
              font-style: normal;
              letter-spacing: 0.8px;
              font-family: ${Avenir};
            }
          }
        }
      }
    }
  }
`

export const InfoBoxContent = styled.div`
  display: flex;
  align-items: center;
  transition: all .3s;
  justify-content: center;
  width: ${props => props.width};
  color: ${props => props.color};
  height: ${props => props.height};
  background: ${props => props.backgroundColor};

  &:hover {
    width: 85px;
    height: 38px;
    cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
    font-style: normal;
    font-family: ${Avenir};
    text-transform: capitalize;
  }
`

export const InfoWindowContent = styled.div`
  position: relative;
  > button {
    top: 5px;
    z-index: 2;
    right: 10px;
    width: 24px;
    height: 24px;
    outline: none;       
    color : #FFFFFF;
    display: flex;
    position: absolute;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    border: 1px solid #FFFFFF;
    background: rgba(0,0,0,0.4);

    img {
      width: 100%;
      aspect-ratio: 4/3;
      filter: invert(1);
      object-fit: contain;
    }
  }

  >div {
    &:hover {
      transform: scale(1);
    }
  }

  .spaceCard_detail_card {
    gap: 10px;
  }
`

export const SimilarProperty = styled.div`
  width: 100%;
  padding: 80px 0;
  @media screen and (max-width: 750px) {
    max-width: 336px;
    padding-top: 48px;
    padding-bottom: 0px;
  }
  
  .similarProperty {
    &_heading {
      display: flex;
      padding: 24px 0;
      margin-bottom: 40px;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      @media screen and (max-width: 520px) {
        padding: 0;
        border: none;
        margin-bottom: 24px;
      }

      h1, p {
        margin: 0;
        color: #FFFFFF;
        font-weight: 400;
        line-height: 120%;
        font-style: normal;
        letter-spacing: 1px;
        font-size: 19.7647px;
        font-family: ${Avenir};
      }

      @media screen and (max-width: 520px) {
        h1 {
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          font-style: normal;
          font-family: ${Denish};
        } 
        p {
          font-size: 14px;
        }
      }
    } 
    &_cards {
      gap: 16px;
      display: flex;
      flex-wrap: wrap;
      align-item: center;
      @media screen and (max-width: 520px) {
        display: none;
      }
    }

    &_slider {
      display: none;
      @media screen and (max-width: 520px) {
        display: block;
      }

      .spaceCard_detail {
        padding: 16px 8px;
      }
    }
  }
`