import styled from 'styled-components'
import { Denish } from '../globalStyle'

export const NavBarContainer = styled.div` 
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  position: fixed;
  padding: 0 32px;
  backdrop-filter: blur( 4px );
  background: rgba(0, 0, 0, 0.6);

  .main_navbar {
    padding: 0px;
    height: 99px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 520px) {
      height: 70px;
      margin-bottom: 20px;
      align-items: flex-end;
    }
    
    &_logo {
      margin-right: 55px;

      @media screen and (max-width: 991px) {
        margin: 0;
      }
    }

    &_menu {
      gap: 2px;
      display: flex;
      align-items: center;
  
      @media screen and (min-width : 991px) {
        width: 100%;
      }
  
      &_mobile_title {
        height: 28px;
        display: none;
  
        @media screen and (max-width : 991px) {
          left: 0;
          top: 50px;
          width: 100%;
          display: block;
          position: absolute;
          text-align: center;
  
          span {
            top: 0;     
            left: -14px;
            padding: 10px;
            position: absolute;
            background-color: white;
            box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.3);
          }
  
          label {
            color: #FFFFFF;    
            font-size: 24px;
            font-weight: 700;
            line-height: 140%;
            font-style: normal;
            font-family: ${Denish};
          }
        }     
      }
  
      &_items {
        gap: 65px;
        width: 100%;
        display: flex;
        align-items: center;
        margin-left: -3.9rem;
        justify-content: center;
        transition: all .3s linear;
  
        @media screen and (max-width: 991px) {
          top: 0;
          right: 0;
          gap: 30px;
          width: 100%;
          z-index: 1000;
          display: flex;
          position: fixed;
          max-width: 329px;
          min-height: 100vh;
          flex-direction: column;
          transform-origin: right;
          align-items: flex-start;
          padding: 142px 32px 0 32px;
          justify-content: flex-start;
          transform: translateX(110%);
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid var(--light-gray2);
        }
  
        p, a {
          margin: 0;
          opacity: 0.7;
          color: #FFFFFF;
          font-size: 18px;
          cursor: pointer;
          font-weight: 700;
          line-height: 24px;
          font-style: normal;
          letter-spacing: 1px;
          text-decoration: none;
          font-family: ${Denish};
  
          &:hover {
            opacity: 1;
            color: #FFFFFF;
          }
        }
      }
  
      .toggler-active {
        display: none;
      }
  
      .navbar-toggler {
        display: none;
    
        @media screen and (max-width: 991px) {
          border: none;
          display: block;
        }
        
        img {
          width: 32px;
          height: 9.6px;
          cursor: pointer;
        }
      }
    }
  }   
`

export const OffCanvasContainer = styled.div`
  .offCanvasnav_content {
    &_mobile_title {
      left: 0;          
      top: 50px;
      width: 100%;
      display: block;
      position: absolute;
      text-align: center;

      span {
        top: 0;
        left: -20px;
        width: 40px;
        height: 40px;
        display: flex;
        cursor: pointer;
        position: absolute;
        align-items: center;
        background-color: white;
        justify-content: center;
        box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.3);
      }

      label {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 600;
        line-height: 140%;
        font-style: normal;
        font-family: Denish;
        letter-spacing: 1px;
      }
    }

    &_crossIcon {
      width: 26px;
      height: 22px;
      float: right;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &_items {
      gap: 40px;
      display: flex;
      padding-top: 191px;
      align-items: center;
      flex-direction: column;

      .accordion-item {
        border: none;
        background: transparent;
      }

      .accordion-header {
        border: none;
        background-color: transparent;
      
        button {
          padding: 0;
          border: none;
          outline: none;
          color: #FFFFFF;
          font-size: 18px;
          background: none;
          box-shadow: none;
          font-weight: 600;
          line-height: 21px;
          font-style: normal;
          font-family: Denish;
          letter-spacing: 1px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);

          ::after {
            background-image: url('images/dropdownDownIcon.svg');
          }
        }
      }

      .accordion-body {
        padding: 0;
        color: #FFFFFF;
        padding-top: 20px;
      }

      a {
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 500;
        line-height: 25px;
        font-style: normal;
        font-family: Denish;
        letter-spacing: 1px;
        text-decoration: none;

        &:hover {
          color: #FFFFFF;
          text-decoration: none;
          text-underline-offset: 12px;
        }   
      }
      
      &_cards {
        gap: 11px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      
        &_card {
          .active {
            border: 1px solid white;

            h1 {
              font-weight: 800 !important;
            }
          } 

          &_1 {
            width: 100%;
            cursor: pointer;
            min-height: 90px;
            position: relative;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(images/property-1.jpg);

            h1 {
              bottom: 0;
              margin: 0;
              width: 100%;
              display: flex;
              color: #FFFFFF;
              font-size: 10px;
              font-weight: 500;
              min-height: 19px;
              line-height: 130%;
              position: absolute;
              font-style: normal;
              align-items: center;
              font-family: Denish;
              justify-content: center;
              backdrop-filter: blur( 1px );
              background: linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%);
            }       
          }

          &_2 {
            width: 100%;
            cursor: pointer;
            min-height: 90px;
            position: relative;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(images/property-3.jpg);

            h1 {
              bottom: 0;
              margin: 0;
              width: 100%;
              display: flex;
              color: #FFFFFF;
              font-size: 10px;
              font-weight: 500;
              min-height: 19px;
              line-height: 130%;
              position: absolute;
              font-style: normal;
              align-items: center;
              font-family: Denish;
              justify-content: center;
              backdrop-filter: blur( 1px );
              background: linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%);
            }                
          }

          &_3 {
            width: 100%;
            cursor: pointer;
            min-height: 90px;
            position: relative;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(images/property-6.jpeg);

            h1 {
              bottom: 0;
              margin: 0;
              width: 100%;
              display: flex;
              color: #FFFFFF;
              font-size: 10px;
              font-weight: 500;
              min-height: 19px;
              line-height: 130%;
              position: absolute;
              font-style: normal;
              align-items: center;
              font-family: Denish;
              justify-content: center;
              backdrop-filter: blur( 1px );
              background: linear-gradient(0deg, rgba(53, 53, 53, 0.2), rgba(53, 53, 53, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%);
            }                
          }
        }
      }
    }
  }
`