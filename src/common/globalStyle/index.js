import styled from "styled-components";

// here is some color that are used
// export const DarkBGColor = '#1E1E1E'
export const DarkBGColor = "#262626";
export const DarkFontColor = "#252525";
export const LightGrayColor = "#323232";
export const LightDarkColor = "#5B5B5B";
export const LightWhiteColor = "#FFFFFF";
export const BorderColor = "rgba(255, 255, 255, 0.2)";
export const DullWhiteColor = "rgba(255, 255, 255, 0.6)";
export const LightBGColor =
  "linear-gradient(0deg, #353535, #353535), linear-gradient(227.37deg, #FFFFFF 8.66%, rgba(255, 255, 255, 0) 96.9%)";
export const LightGrayBGColor =
  "linear-gradient(0deg, #333333, #333333), linear-gradient(227.37deg, #FFFFFF 8.66%, rgba(255, 255, 255, 0) 96.9%)";

// here is font family that are used
export const Inter = "Inter";
export const Denish = "Denish";
export const Avenir = "Avenir";

// here is mixins
export const BlurryBackgroundDark = `
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px );
`;
export const BlurryBackgroundMedium = `
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px );
`;

export const BlurryBackgroundLight = `
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px );
`;

export const FieldErrorMessage = styled.p`
    top: 100%;
    margin: 0;
    color: #FFFFFF;
    position absolute;
    font-family: ${Avenir};
`;

// InquiryDateModalStyle
export const InquiryDateModalContainer = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 10000;
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

  @media screen and (max-width: 991px) {
    background: rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
  }

  @media screen and (max-width: 520px) {
    padding: 25px;
  }

  .inquiryDateModalContainer_content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &_header {
      position: relative;

      h1 {
        margin: 0;
        color: #ffffff;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        letter-spacing: 1px;
        font-family: ${Denish};
        font-size: 48px !important;
        line-height: 56px !important;
        @media screen and (max-width: 768px) {
          font-size: 28px !important;
          line-height: 30px !important;
        }
      }

      .cross-icon {
        top: 0;
        right: 0;
        width: 32px;
        height: 32px;
        cursor: pointer;
        position: absolute;
        @media screen and (max-width: 768px) {
          width: 26px;
          height: 26px;
        }
        @media screen and (max-width: 520px) {
          width: 20px;
          height: 20px;
        }
      }
    }
    &_body {
      width: 100%;
      margin: auto;
      max-width: 799px;
      margin-top: 60px;

      .submitBtn-container {
        display: flex;
        margin-top: 30px;
        justify-content: flex-end;

        button {
          width: 100%;
          height: 68px;
          border: none;
          color: #222222;
          font-size: 20px;
          cursor: pointer;
          max-width: 254px;
          font-weight: 700;
          line-height: 24px;
          font-style: normal;
          background: #ffffff;
          letter-spacing: 1px;
          font-family: ${Denish};
          transition: transform 300ms ease 100ms;
          backdrop-filter: blur(4.18165px);
          &:hover {
            color: #ffffff;
            background: transparent;
            border: 1px solid white;
          }
          @media screen and (max-width: 700px) {
            height: 57px;
            font-size: 18px;
            max-width: 125px;
          }
        }
      }
    }
  }
`;

// DateRange Style
export const RangePickerContainer = styled.div`
  background: rgba(37, 37, 37, 0.8);
  box-shadow: 9.87062px 3.70148px 27.1442px 12.3383px rgba(0, 0, 0, 0.13);

  .DateRangeCalender {
    padding: 20px;
    padding-bottom: 0;

    @media screen and (max-width: 520px) {
      padding: 0 10px;
      padding-bottom: 0;
    }

    .react-datepicker {
      gap: 38px;
      width: 100%;
      border: none;
      display: grid;
      background: transparent;
      grid-template-columns: 1fr 1fr;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }

      .react-datepicker__navigation.react-datepicker__navigation--previous,
      .react-datepicker__navigation.react-datepicker__navigation--next {
        @media screen and (max-width: 700px) {
          top: 20px;
        }
      }

      .react-datepicker__month-container {
        .react-datepicker__header {
          padding: 0;
          border: none;
          background: transparent;

          .react-datepicker__current-month {
            margin: auto;
            color: #ebebeb;
            font-size: 18px;
            font-weight: 600;
            max-width: 325px;
            line-height: 21px;
            font-style: normal;
            letter-spacing: 1px;
            padding-bottom: 15px;
            font-family: ${Denish};
            border-bottom: 1px solid #4e4e4e;
            @media screen and (max-width: 700px) {
              padding-top: 15px;
            }
          }

          .react-datepicker__day-names {
            display: grid;
            padding-top: 10px;
            align-items: center;
            padding-bottom: 10px;
            justify-items: center;
            grid-template-columns: repeat(7, 1fr);

            .react-datepicker__day-name {
              margin: 0;
              color: #ebebeb;
              font-size: 12px;
              font-weight: 400;
              line-height: 17px;
              font-style: normal;
              letter-spacing: 1px;
              font-family: ${Avenir};
              text-transform: uppercase;
            }
          }
        }

        .react-datepicker__month {
          margin: 0;
          display: flex;
          row-gap: 10px;
          flex-direction: column;

          .react-datepicker__week {
            display: grid;
            align-content: center;
            justify-items: center;
            grid-template-columns: repeat(7, 1fr);

            .react-datepicker__day--disabled {
              opacity: 0.6;
              text-decoration: none !important;
            }

            .react-datepicker__day {
              width: 29px;
              height: 29px;
              display: flex;
              color: #ffffff;
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              font-style: normal;
              text-align: center;
              align-items: center;
              font-family: ${Avenir};
              justify-content: center;
              @media screen and (max-width: 700px) {
                font-size: 14px;
                line-height: 19px;
              }

              &:hover {
                border-radius: 0;
                background: rgba(255, 255, 255, 0.2) !important;
              }
            }

            .react-datepicker__day--keyboard-selected {
              background: transparent;
            }

            .react-datepicker__day--in-selecting-range,
            .react-datepicker__day--in-range {
              border-radius: 0;
              background: rgba(255, 255, 255, 0.2) !important;
            }

            .react-datepicker__day--outside-month {
              visibility: hidden;
            }

            .react-datepicker__day--selected,
            .react-datepicker__day--range-start,
            .react-datepicker__day--range-end {
              border-radius: 0;
              color: #1f2323 !important;
              background: #ffffff !important;
              &:hover {
                color: #1f2323 !important;
                background: #ffffff !important;
              }
            }
          }
        }
      }
    }
  }

  .dateRangeFooter {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    min-height: 100px;
    position: relative;
    justify-content: space-around;
    border-top: 1px solid #4e4e4e;
    @media screen and (max-width: 700px) {
      border: none;
      min-height: 80px;
    }

    &_checkIn,
    &_checkOut,
    &_pickUp,
    &_dropOff,
    &_reserveDate {
      gap: 8px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      .key {
        margin: 0;
        display: flex;
        color: #ebebeb;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        font-style: normal;
        text-align: center;
        font-family: Avenir;
        align-items: center;
        letter-spacing: 1px;
        text-transform: capitalize;
        @media screen and (max-width: 700px) {
          font-size: 12px;
          line-height: 16px;
        }
      }

      .value {
        margin: 0;
        color: #ffffff;
        font-size: 18px;
        font-weight: 400;
        line-height: 25px;
        font-style: normal;
        letter-spacing: 1px;
        font-family: ${Avenir};
        text-transform: capitalize;
        @media screen and (max-width: 700px) {
          font-size: 14px;
          line-height: 19px;
        }
      }
    }

    &_clear-btn {
      left: 24px;
      bottom: 18px;
      position: absolute;

      @media screen and (max-width: 700px) {
        bottom: 8px;
      }

      @media screen and (max-width: 520px) {
        bottom: 5px;
      }

      button {
        padding: 0;
        border: none;
        outline: none;
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        line-height: 140%;
        font-style: normal;
        font-family: ${Denish};
        background: transparent;
        text-decoration: underline;
        @media screen and (max-width: 700px) {
          font-size: 14px;
          font-weight: 400;
          line-height: 19px;
          font-style: normal;
          font-family: ${Avenir};
        }
      }
    }
  }
`;

// Map style
export const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
    // stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "park",
    elementType: "labels.icon",
    stylers: [{ visibility: "on" }],
  },

  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "off" }],
  },
];

// export const mapStyle = [
//     {
//         featureType: "poi",
//         stylers: [{ visibility: "off" }],
//     },
//     {
//         featureType: "transit",
//         elementType: "labels.icon",
//         stylers: [{ visibility: "off" }],
//     },
//     {
//         featureType: "road",
//         elementType: "labels",
//         stylers: [{ visibility: "off" }],
//     },
//     {
//         featureType: "road",
//         elementType: "geometry",
//         stylers: [{ lightness: 100 }, { visibility: "simplified" }],
//     },
// ];

// export const mapStyle = [
//     {
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#242f3e"
//             }
//         ]
//     },
//     {
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#746855"
//             }
//         ]
//     },
//     {
//         "elementType": "labels.text.stroke",
//         "stylers": [
//             {
//                 "color": "#242f3e"
//             }
//         ]
//     },
//     {
//         "featureType": "administrative.locality",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#d59563"
//             }
//         ]
//     },
//     {
//         "featureType": "poi",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#d59563"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.park",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#263c3f"
//             }
//         ]
//     },
//     {
//         "featureType": "poi.park",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#6b9a76"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#38414e"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#212a37"
//             }
//         ]
//     },
//     {
//         "featureType": "road",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#9ca5b3"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#746855"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "geometry.stroke",
//         "stylers": [
//             {
//                 "color": "#1f2835"
//             }
//         ]
//     },
//     {
//         "featureType": "road.highway",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#f3d19c"
//             }
//         ]
//     },
//     {
//         "featureType": "transit",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#2f3948"
//             }
//         ]
//     },
//     {
//         "featureType": "transit.station",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#d59563"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "geometry",
//         "stylers": [
//             {
//                 "color": "#17263c"
//             }
//         ]
//     },
//     {
//         "featureType": "water",
//         "elementType": "labels.text.fill",
//         "stylers": [
//             {
//                 "color": "#515c6d"
//             }
//         ]
//     },
//     {
//         "featureType": "water",

//     }]
