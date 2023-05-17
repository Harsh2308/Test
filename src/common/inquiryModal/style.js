import styled from "styled-components";
import { Avenir, Denish } from "../globalStyle";

export const DialogContainerStyled = styled.div`
  display: grid;
  height: calc(100vh - 60px);
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
  }

  h3 {
    margin: 0;
    color: #ffffff;
    font-weight: 700;
    line-height: 45px;
    font-style: normal;
    letter-spacing: 1px;
    font-family: ${Denish};
    text-shadow: 2px 2px #2b2b2b;
    font-size: ${(props) => props.size}px;
    @media screen and (max-width: 1024px) {
      font-size: 42px;
    }

    @media screen and (max-width: 991px) {
      font-weight: 400;
      line-height: 42px;
      font-size: ${(props) => props.mbSize}px;
    }
  }

  .left {
    display: flex;
    padding: 40px 0;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 992px) {
      padding: clamp(20px, 3vh, 40px) 0;
    }

    @media screen and (max-width: 768px) {
      align-items: flex-start;
    }

    &_container {
      width: 100%;
      max-width: 440px;
      @media screen and (max-width: 520px) {
        max-width: 300px;
      }

      @media screen and (max-width: 376px) {
        max-width: 250px;
      }

      @media screen and (max-width: 320px) {
        max-width: 220px;
      }

      .mb-header {
        text-align: center;
        margin-bottom: 30px;

        @media screen and (min-width: 991px) {
          display: none;
        }

        .cross-icon {
          top: 45px;
          right: 60px;
          width: 28px;
          height: 28px;
          z-index: 9999;
          position: fixed;
          background: #262626;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      h1 {
        color: #ffffff;
        font-size: 48px;
        font-weight: 500;
        line-height: 36px;
        font-style: normal;
        margin-bottom: 40px;
        letter-spacing: 1px;
        font-family: ${Denish};
        @media screen and (min-width: 992px) {
          font-size: clamp(18px, 2vw, 48px);
          line-height: clamp(18px, 2vw, 54px);
          margin-bottom: clamp(20px, 2vh, 36px);
        }

        @media screen and (max-width: 991px) {
          font-size: 24px;
          line-height: 140%;
          margin-bottom: 32px;
        }
      }

      .inquiry-form,
      .fleet-form {
        .form {
          .fields-wrapper {
            > div {
              .customTextArea {
                textarea {
                  @media screen and (min-width: 992px) {
                    height: clamp(70px, 10vh, 160px) !important;
                  }
                }
              }
              @media screen and (min-width: 992px) {
                margin-bottom: clamp(14px, 3vh, 24px);
              }
            }
            .ant-select-selector,
            .ant-input {
              @media screen and (min-width: 992px) {
                height: clamp(38px, 6vh, 56px);
              }
            }
          }
          .btn-container {
            @media screen and (min-width: 992px) {
              margin-top: clamp(20px, 3vh, 40px);
            }
          }
        }

        .datepicker {
          width: 100%;
          height: 56px;
          opacity: 0.9;
          display: flex;
          color: #ffffff;
          cursor: pointer;
          padding: 0 16px;
          font-size: 16px;
          font-weight: 400;
          line-height: 22px;
          font-style: normal;
          margin-bottom: 24px;
          align-items: center;
          letter-spacing: 1px;
          font-family: ${Avenir};
          border: 1px solid #d9d9d9;
          background-position-x: 95%;
          background-repeat: no-repeat;
          background-position-y: center;
          background-color: transparent;
          background-image: url("images/calendar-outline.svg");
          @media screen and (min-width: 992px) {
            height: clamp(38px, 6vh, 56px);
            margin-bottom: clamp(14px, 3vh, 24px);
          }
          @media screen and (max-width: 520px) {
            font-size: 14px;
            line-height: 16px;
          }
        }

        .info {
          gap: 10px;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 24px;
          align-items: center;
          justify-content: space-between;

          .item {
            gap: 12px;
            display: flex;
            color: #ffffff;
            font-size: 16px;
            font-weight: 800;
            line-height: 22px;
            font-style: normal;
            align-items: center;
            font-family: ${Avenir};
            @media only screen and (max-width: 768px) {
              gap: 8px;
              font-size: 14px;
              line-height: 19px;
            }
          }
        }

        .react-datepicker-popper {
          z-index: 100000 !important;
        }

        .btn-container {
          display: flex;
          margin-top: 40px;
          align-items: center;
          justify-content: flex-end;
          @media screen and (max-width: 991px) {
            margin-top: 32px;
          }

          button {
            width: 177px;
            height: 47px;
            border: none;
            color: #252525;
            font-size: 16px;
            font-weight: 700;
            line-height: 140%;
            font-style: normal;
            background: #ffffff;
            font-family: ${Denish};
            mix-blend-mode: normal;
            backdrop-filter: blur(2.85997px);
            @media screen and (max-width: 991px) {
              width: 115px;
              height: 36px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }

  .right {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 991px) {
      display: none;
    }

    &_bg {
      width: 100%;
      aspect-ratio: 16/9;
      margin-left: -130px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(${(props) => props.bg});
      @media screen and (max-width: 1440px) {
        margin-left: -120px;
      }

      @media screen and (max-width: 1024px) {
        margin-left: 0px;
      }

      .cross-icon {
        top: 32px;
        right: 32px;
        cursor: pointer;
        position: absolute;
      }

      .title > h3 {
        margin-bottom: -4%;
      }

      .title {
        left: 41%;
        bottom: 14.5%;
        width: 100%;
        position: absolute;
        text-align: center;
        transform: translate(-50%, -50%);

        @media screen and (max-width: 1024px) {
          left: 50%;
        }
      }
    }
  }
`;
