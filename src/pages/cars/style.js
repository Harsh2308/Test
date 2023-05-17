import styled from "styled-components";
import { Avenir, DarkBGColor, Denish } from "../../common/globalStyle";

export const CarsPage = styled.div`
  background-color: ${DarkBGColor};

  .mobile-heading {
    width: 100%;
    margin: auto;
    display: none;
    max-width: 255px;
    padding-top: 120px;
    @media screen and (max-width: 520px) {
      display: block;
    }
    
    h1 {
      margin: 0;
      color: #FFFFFF;
      font-size: 32px;
      font-weight: 700;
      line-height: 34px;
      font-style: normal;
      text-align: center;
      letter-spacing: 1px;
      font-family: ${Denish};
    }
  }
`;

export const CarStyledBanner = styled.div`
  width: 100%;
  display: flex;
  min-height: 660px;
  padding-top: 120px;
  align-items: center;
  background-size: cover;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(images/carimages/carBanner.png);
    @media screen and (max-width: 520px) {
    min-height: auto;
    padding-top: 200px;
    background-size: auto;
    background-position: 52% -40px;
    background-image: url(images/carimages/carBanner.png);
    }

  .banner_content {
    // gap: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 520px) {
      // gap: 20px;
    }

    h1 {
      margin: 0;
      font-size: 48px;
      font-weight: 700;
      line-height: 56px;
      font-style: normal;
      text-align: center;
      letter-spacing: 1px;
      font-family: ${Denish};
      color: rgba(255, 255, 255, 0.23);
      background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.53) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;

      @media screen and (max-width: 520px) {
        font-size: 34px;
        max-width: 253px;
        line-height: 40px;
      }
    }

    &_images {
      gap: 28px;
      display: flex;
      margin-top: 31px;
      margin-bottom: 12px;
      align-items: center;
      @media screen and (max-width: 520px) {
        gap: 21px;
        margin-top: 15px;
        margin-bottom: 8px;

        img:nth-child(3) {
          height: 60px;
        }
      }

      img:nth-child(1) {
        height: 32px;
        @media screen and (max-width: 520px) {
          height: 19px;
        }
      }

      img:nth-child(2) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &_text {
      gap: 10px;
      display: flex;
      max-width: 475px;
      align-items: center;
      flex-direction: column;
      @media screen and (max-width: 586px) {
        max-width: 292px;
        gap:5px;
        margin-top: 15px;
        margin-bottom: 25px;
      }

      h3 {
        margin: 0;
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 800;
        line-height: 27px;
        font-style: normal;
        text-align: center;
        font-family: ${Avenir};
        @media screen and (max-width: 520px) {
          font-size: 16px;
          line-height: 22px;
        }
      }

      p {
        margin: 0;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        font-style: normal;
        text-align: center;
        letter-spacing: 2.4px;
        font-family: ${Avenir};
        @media screen and (max-width: 520px) {
          font-size: 14px;
          line-height: 19px;
          text-align: center;
          letter-spacing: 0.15em;
        }
      }

      button {
        padding: 0;
        border: none;
        outline: none;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 800;
        line-height: 22px;
        font-style: normal;
        font-family: ${Avenir};
        background: transparent;
        text-decoration: underline;
      }
      .content {
        opacity: 0;
        height: 0px;
        pointer-events: none;
      }
      &.active .content{
        opacity: 1;
        height: 100px;
        transition: all 0.5s ease-in-out;

      }
   

    }
  }
`;

export const CarFilterStyled = styled.div`
  margin: auto;
  max-width: 1440px;
  padding-left: 40px;
  @media screen and (max-width: 520px) {
    padding-left: 25px;
    // margin-top: ${props => props.extend ? '8px' : '-55px'};
  }
  @media screen and (max-width: 320px) {
    padding-left: 20px;
  }

  .filter {
    &_items {
      gap: 24px;
      display: grid;
      margin-top: 80px;
      align-items: center;
      margin-bottom: 45px;
      grid-template-columns: 102px 3px 1fr;

      @media screen and (max-width: 520px) {
        gap: 14px;
        top: 90px;
        z-index: 2;
        margin-top: 40px;
        position: sticky;
        margin-bottom: 24px;
        background: #262626;
        grid-template-columns: 68px 3px 1fr;
      }

      .grid-card {
        width: 100%;
        height: 100%;
        display: flex;
        cursor: pointer;
        border-radius: 0px;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(3px);
        background: linear-gradient(
          0deg,
          rgba(38, 38, 38, 0.7),
          rgba(38, 38, 38, 0.7)
        ),
        linear-gradient(
          134.15deg,
          rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0.06) 100%
        );

        @media screen and (max-width: 520px) {
          width: 68px;
          height: 67px;
        }
      }

      .grid-card.all {
        opacity: 0.8;
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        font-style: normal;
        font-family: Be Vietnam Pro;
        &:hover {
          border: 2px solid rgba(255, 255, 255, 0.6);
          // background-size: 100% 100%;
          // background-repeat: no-repeat;
          // background-image: url(images/active-filter-card.png);
        }

        @media screen and (max-width: 520px) {
          height: 67px;
          font-size: 16px;
          line-height: 21px;
          width: 68px !important;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      .grid-card.active {
        border: 2px solid rgba(255, 255, 255, 0.6);
        // background-size: 100% 100%;
        // background-repeat: no-repeat;
        // background-image: url(images/active-filter-card.png);
      }

      .separator {
        width: 3px;
        height: 100%;
        opacity: 0.8;
        display: inline-block;
        background: rgba(255, 255, 255, 0.6);
        @media screen and (max-width: 520px) {
          width: 2px;
        }
      }

      &_slider {
        width: 100%;
        height: 105px;

        @media screen and (max-width: 520px) {
          height: 68px;
        }

        .swiper-slide {
          opacity: 0.8;
          display: flex;
          padding: 11px;  
          cursor: pointer;
          aspect-ratio: 1/1;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(3px);
          background: linear-gradient(
            0deg,
            rgba(38, 38, 38, 0.7),
            rgba(38, 38, 38, 0.7)
          ),
          linear-gradient(
            134.15deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0.06) 100%
          );
        }

        .swiper-button-prev, .swiper-button-next {
          top: 0;
          margin: 0;
          width: 60px;
          height: 100%;
          opacity: 0.8;
          mix-blend-mode: normal;
          &::after {
            font-size: 25px;
          }
        }

        .swiper-button-prev {
          left: 0;
          background: linear-gradient(90deg, #0F0F0F 0%, rgba(39, 39, 39, 0.07) 100%);
        }
      
        .swiper-button-next {
          right: 0;
          background: linear-gradient(90deg, rgba(39, 39, 39, 0.7) 0%, #0F0F0F 100%);
        }
      }
    }
  }
`;

export const CarFilterStyledCards = styled.div`
  gap: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(425px, 425px));
  @media screen and (max-width: 520px) {
    justify-content: flex-start;
  }

  .filter-card {
    height: 171px;
    background: linear-gradient(
        0deg,
        rgba(38, 38, 38, 0.7),
        rgba(38, 38, 38, 0.7)
      ),
      linear-gradient(
        134.15deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0.06) 100%
      );
    backdrop-filter: blur(3px);
  }
`;

export const CarResultStyledCard = styled.div`
  width: 100%;
  max-width: 425px;

  @media screen and (max-width: 450px) {
    height: 158px;
    max-width: 375px;
  }

  @media screen and (max-width: 401px) {
    max-width: 350px;
  }

  @media screen and (max-width: 376px) {
    max-width: 325px;
  }

  @media screen and (max-width: 320px) {
    max-width: 280px;
  }

  .activeCard {
    &::before {
      transform: scaleY(-1);
    }
  }

  .card {
    gap: 19px;
    z-index: 1;
    height: 100%;
    display: grid;
    position: relative;
    background: transparent;
    padding: 0px 24px 12px 24px;
    justify-content: space-between;
    grid-template-columns: minmax(0, 258px) 123px;
    
    @media screen and (max-width: 520px) {
      gap: 14px;
      padding: 0px 17px 12px 17px;
      grid-template-columns: minmax(0, 192.65px) 94px;
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
      background-repeat: no-repeat;
      background-image: url("images/carimages/filter-card-bg.png");
    }

    &_image-container {
      width: 100%;
      display: flex;
      max-width: 258px;
      flex-direction: column;
      justify-content: space-between;

      .image {
        width: 100%;
        height: 139px;
        transform: translate(-10px, 10px);
        @media screen and (max-width: 520px) {
          height: 104px;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .car-name {
        margin: 0px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
        font-style: normal;
        font-family: ${Avenir};
        @media screen and (max-width: 520px) {
          font-size: 14px;
          line-height: 19px;
        }
      }
    } 
    
    &_info-container {
      gap: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      h2 {
        margin: 0px;
        color: #FFFFFF;
        font-size: 26px;
        display: inherit;
        font-weight: 500;
        line-height: 36px;
        font-style: normal;
        font-family: ${Avenir};
        @media screen and (max-width: 520px) {
          font-size: 20px;
          line-height: 27px;
        }

        .slash {
          opacity: 0.7;
        }

        .duration {
          opacity: 0.7;
          font-size: 16px;
          @media screen and (max-width: 520px) {
            font-size: 14px;
          }
        }
      }
    }

    .detail-btn {
      width: 100%;
      height: 48px;
      border: none;
      display: flex;
      color: #FFFFFF;
      font-size: 18px;
      max-width: 126px;
      font-weight: 500;
      line-height: 25px;
      font-style: normal;
      text-align: center;
      align-items: center;
      text-decoration: none;
      font-family: ${Denish};
      background-size: cover;
      justify-content: center;
      background-position: right;
      background-image: url(images/btn-border.png);
      @media screen and (max-width: 520px) {
        height: 36px;
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 0.5px;
      }

      &:hover {
        color: #262626;
        background: #FFFFFF;
      }
    }
  }
`;

export const CarSecretFleet = styled.div`
  display: flex;
  padding: 80px 0px;
  align-items: center;
  justify-content: center;
    
  @media screen and (max-width: 520px) {
    padding-top: 32px;
    padding-bottom: 0px;
  }
  
  .content {
    width: 100%;
    color: #FFFFFF;
    max-width: 600px;
    text-align: center;

    @media screen and (max-width: 520px) {
      max-width: 327px;
    }

    @media screen and (max-width: 320px) {
      max-width: 270px;
    }

    p {
      margin: 0;
      font-size: 48px;
      font-weight: 500;
      line-height: 56px;
      font-style: normal;
      margin-bottom: 40px;
      letter-spacing: 1px;
      font-family: ${Denish};

      @media screen and (max-width: 520px) {
        margin: auto;
        font-size: 24px;
        max-width: 277px;
        line-height: 34px;
        margin-bottom: 34px;
      }
    }

    button {
      width: 100%;
      height: 83px;
      border: none;
      font-size: 24px;
      max-width: 451px;
      font-weight: 700;
      line-height: 140%;
      font-style: normal;
      letter-spacing: 1px;
      font-family: ${Denish};
      backdrop-filter: blur(3.5px);
      background: linear-gradient(0deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(92.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);

      &:hover {
        background: linear-gradient(-90deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(92.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%), linear-gradient(0deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2));
      }
      
      @media screen and (max-width: 520px) {
        height: 57px;
        font-size: 16px;
        font-weight: 500;
      }    
    }
  }    
`;