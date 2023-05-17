import styled from "styled-components";
import { Avenir, DarkBGColor, Denish } from "../../common/globalStyle";

export const CarDetailPage = styled.div`
  padding-top: 100px;
  background-color: ${DarkBGColor};
  @media screen and (max-width: 768px) {
    padding-top: 90px;
  }
`;

export const CarStyledBanner = styled.div`
  min-height: 574px;
  position: relative;
  background-size: contain;
  background-color: #E3E3E3;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.bgImg});      

  button {
    right: 100px;
    bottom: 30px;
    width: 178px;
    height: 52px;
    border: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    position: absolute;
    font-style: normal;
    letter-spacing: 1px;
    font-family: ${Denish};
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8.45764px);
    @media screen and (max-width: 520px) {
        width: 100px;
        height: 33px;
        font-size: 10px;
    }
  }          
`;

export const CarMbStyledSlider = styled.div`
  position: relative;

  .car-slider {
    // height: 574px;
    position: unset;
    background: #e3e3e3;
    

    @media screen and (max-width: 768px) {
      // height: 474px;
    }

    @media screen and (max-width: 520px) {
      // height: 397px;
      // background: transparent;
    }

    .swiper-slide {
      // height: 218px;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      aspect-ratio: 16/9;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    
    .swiper-pagination {
      display: none;
      @media screen and (max-width: 520px) {
        bottom: -25px;
        display: block;
      }

      .swiper-pagination-bullet {
        opacity: 1;
        width: 8px;
        height: 8px;
        border-radius: 3.5px;
        transition: all 0.5s ease;
        background: rgba(255, 255, 255, 0.7);  
      }
  
      .swiper-pagination-bullet.swiper-pagination-bullet-active {
        width: 28px;
        height: 8px;
        background: #FFFFFF;
        border-radius: 3.5px;
      } 
    }
  }
`;

export const CarStyledContent = styled.div`
  margin: auto;
  display: grid;
  max-width: 1240px;
  padding-top: 80px;
  padding-bottom: 80px;
  grid-template-columns: 1fr minmax(0, 379px);

  @media screen and (max-width: 1024px) {
    padding: 50px 24px;
  }
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 520px) {
    // padding-top: 32px;
    padding-top: 50px;
    padding-left: 24px;
    padding-right: 0px;
    padding-bottom: 0px;
  }

  .content {
    width: 100%;
    max-width: 672px;
    @media screen and (max-width: 1024px) {
      max-width: 550px;
    }
    @media screen and (max-width: 520px) {
      max-width: 400px;
    }

    @media screen and (max-width: 415px) {
      max-width: 388px;
    }

    @media screen and (max-width: 394px) {
      max-width: 365px;
    }

    @media screen and (max-width: 376px) {
      max-width: 350px;
    }

    @media screen and (max-width: 361px) {
      max-width: 335px;
    }

    @media screen and (max-width: 320px) {
      max-width: 290px;
    }

    h3 {
      margin: 0;
      color: #FFFFFF;
      font-size: 24px;
      font-weight: 700;
      line-height: 28px;
      font-style: normal;
      letter-spacing: 1px;
      margin-bottom: 24px;
      font-family: ${Denish};
      @media screen and (max-width: 520px) {
          font-size: 18px;
          line-height: 21px;
          margin-bottom: 16px;
      }   
    }

    &_carDetail {
      padding-bottom: 40px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);

      @media screen and (max-width: 520px) {
        padding-bottom: 32px;
        border-bottom: 1px solid transparent;
      }

      &_heading {
        margin: 0;
        color: #FFFFFF;
        font-size: 36px;
        font-weight: 500;
        line-height: 32px;
        font-style: normal;
        letter-spacing: 1px;
        margin-bottom: 24px;
        font-family: ${Denish};

        @media screen and (max-width: 520px) {
          font-size: 24.5px;
          line-height: 29px;
          margin-bottom: 8px;
        }

        span {
          color: #B3AFAC;
          font-size: 16px;
          font-weight: 800;
          line-height: 22px;
          margin-left: 24px;
          font-style: normal;
          letter-spacing: 1px;
          font-family: ${Avenir};
          @media screen and (max-width: 520px) {
            font-size: 12px;
            line-height: 17px;
            margin-left: 16px;
          }
        }   
      }

      &_price {
        margin: 0;
        color: #FFFFFF;
        font-size: 36px;
        font-weight: 800;
        line-height: 49px;
        font-style: normal;
        letter-spacing: 1px;
        font-family: ${Avenir};
        @media screen and (max-width: 520px) {
          font-size: 24px;
          line-height: 33px;
        }

        span {
          color: #B3AFAC;
          font-size: 18px;
          @media screen and (max-width: 520px) {
            font-size: 12px;
          }
        }
      }   
    }

    &_specifications {
      padding: 40px 0px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.2);

      @media screen and (max-width: 520px) {
        padding: 0px 0px;
        border-bottom: 1px solid transparent;
      }

      &_cards {
        gap: 32px;
        display: flex;
        flex-wrap: wrap;
        align-items: center; 
      }   

      .swiper-slide {
        >div {
          width: 87px;
          height: 120px;
        }
      }
    }

    &_description {
      padding-top: 40px;
      @media screen and (max-width: 520px) {
        padding-top: 32px;
      }
        
      p {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        font-style: normal;
        color: rgba(255, 255, 255, 0.7);
        font-family: ${Avenir};
        @media screen and (max-width: 520px) {
          font-size: 14px;
        }
      }   
    }
  }
`;

export const CarSpecStyledCard = styled.div`
  gap: 8px;
  z-index: 1;
  width: 101px;
  height: 132px;
  display: flex;
  padding: 17px 8px;
  position: relative;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background: transparent;
  transition: all .5s ease;
  justify-content: flex-end;

  &::before{
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    z-index: -1;
    height: 100%;
    position: absolute;
    transition: all .5s ease;
    background-size: 100% 100%;
    background-image: url('images/carimages/cardetailcardbg.png');
  }  

  .value, .title {
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    font-style: normal;
    text-align: center;
    letter-spacing: 0.6px;      
    font-family: ${Avenir};
    @media screen and (max-width: 520px) {
      font-size: 12px;
      line-height: 17px;
    }
  }  

  .title {
    opacity: 0.6;
  }     
`;

export const ViewAllPhotosContainer = styled.div`
  margin: 20px 20px 20px;
  padding: 30px 30px 0 30px;
    
  .swiper-wrapper {
    height: calc(100vh - 110px);
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      aspect-ration: 16/9 !important;
      img {
          height: 100%;
          object-fit: cover;
          object-position: center;
      }
    }
  }        

  .swiper-button-prev, .swiper-button-next {
    top: 0;
    margin: 0;
    width: 60px;
    height: 100%;
    opacity: 0.6;
    mix-blend-mode: normal;
    &:after {
      font-size: 25px;
    }
  }        
      
  .swiper-button-prev {
    left: 0;
    // background: linear-gradient(90deg, #0F0F0F 0%, rgba(39,39,39,0.0001) 100%);
  }  
  
  .swiper-button-next {
    right: 0;
    // background: linear-gradient(90deg, rgba(39, 39, 39, 0.0001) 0%, #0F0F0F 100%);
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
`;

export const InquiryMobBox = styled.div`
  gap: 9px;
  width: 100%;
  display: none;
  max-width: 328px;
  margin-top: 32px;
  flex-direction: column;      

  @media screen and (max-width: 991px) {
    left: 50%;
    bottom: 0;
    z-index: 1;
    display: flex;
    position: fixed;
    background: #262626;
    padding-bottom: 15px;
    transform: translate(-50%, 0%);
  }

  @media screen and (max-width: 320px) {
    max-width: 290px;
  }

  button {
    height: 56px;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    font-style: normal;
    font-family: ${Denish};
    backdrop-filter: blur(3.5px);
    background: linear-gradient(0deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(92.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
  }    

  p {
    margin: 0;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    font-style: normal;
    text-align: center;
    letter-spacing: 1px;
    font-family: ${Avenir};
    text-transform: capitalize;
  }        
`;