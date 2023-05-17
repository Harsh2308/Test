import styled from "styled-components";
import { Avenir } from "../globalStyle";

export const ViewAllPhotosContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  .viewAllPhotos_sliders {
    margin: 20px 20px 20px;
    padding: 30px 30px 0 30px;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;

    &_top {
      .swiper-wrapper {
        .swiper-slide {
          .main-image {
            height: 100%;
            margin: auto;
            width: 100%;
            position: relative;
            img {
                object-fit: cover;
                aspect-ratio: 20 / 9;
                object-position: center bottom;
                height: initial;
                width: 100%;
            }

            .tag {
              top: 18px;
              left: 24px;
              height: 45px;
              width: 162px;
              display: flex;
              color: #ffffff;
              font-size: 20px;
              font-weight: 400;
              line-height: 27px;
              font-style: normal;
              position: absolute;
              align-items: center;
              letter-spacing: 1px;
              font-family: ${Avenir};
              justify-content: center;
              background: rgba(0, 0, 0, 0.25);
            }
          }
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        top: -85px;
        margin: 0;
        width: 60px;
        height: 100%;
        position: fixed;
        mix-blend-mode: normal;
        &:after {
          font-size: 25px;
        }
      }

      .swiper-button-prev {
        left: 0;
        display: flex;
        color: #ffffff;
      }

      .swiper-button-next {
        right: 0;
        display: flex;
      }
      .swiper-button-next.swiper-button-disabled,
      .swiper-button-prev.swiper-button-disabled {
        opacity: 1;
      }

      .swiper-pagination {
        bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: center;

        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 0px;
          display: block !important;
        }
      }
    }

    &_bottom {
      padding-top: 20px;
      position: relative;
      .swiper {
        position: unset;
        .active {
          border: 3px solid #ffffff;
          box-shadow: 0px 4px 15px rgba(255, 255, 255, 0.1);
        }

        .swiper-wrapper {
          .swiper-slide {
            .image {
              width: 100%;
              cursor: pointer;
              // aspect-ratio: 2/1;
              margin-bottom: 0px;

              img {
                width: 100%;
                object-fit: cover;
                aspect-ratio: 20/9;
                object-position: bottom;
                @media screen and (max-height: 750px) {
                  aspect-ratio: 40.5/11;
                }
              }
            }

            .title {
              margin: 0;
              color: white;
              color: #ffffff;
              font-size: 20px;
              font-weight: 400;
              line-height: 27px;
              font-style: normal;
              letter-spacing: 1px;
              font-family: ${Avenir};
            }
          }
        }

        .swiper-button-prev {
          left: -50px;
          margin-left: 0px;
        }

        .swiper-button-next {
          right: -50px;
          margin-right: 0px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 22px;
          font-weight: bolder;
        }
      }
    }
  }
`;
