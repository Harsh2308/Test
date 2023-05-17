import styled from 'styled-components'
import { Avenir, DarkBGColor, Denish } from '../../common/globalStyle'

export const HomePageContainer = styled.div`
    background-color: ${DarkBGColor};
`
export const HeroSectionContainer = styled.div`
    padding-bottom: 80px;
    @media screen and (max-width : 768px) {
        padding-bottom: 32px;
    }

    .heroSection {
        position: relative;
        @media screen and (max-width : 520px) {
            padding-top: 90px;
        }
        &_BG-video {
            height: 100vh;
            @media only screen and (max-width: 520px) {
                display: none;
            }
            
            video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &_BG-image {
            display: none;
            min-height: 680px;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-image: url(images/heroSectionMobile.png);
            @media only screen and (max-width: 520px) {
                display: block;
            }
        }

        &_luxury-water {
            left: 135px;
            bottom: 40%;
            width: 447px;
            height: 72px;
            position: absolute;
            @media screen and (max-width : 520px) {
                display: none;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        &_searchBar {
            left: 50%;
            bottom: 0;
            width: 100%;
            display: flex;
            cursor: pointer;
            max-width: 520px;
            min-height: 101px;
            position: absolute;
            margin-bottom: 16px;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.6);
            transform: translate(-50%, 0%);
            backdrop-filter: blur(8.45764px);

            @media only screen and (max-width: 768px) {
                min-height: 79px;
                max-width: 350px;
            }
    
            @media only screen and (max-width: 520px) {
                max-width: 283px;
                margin-bottom: 40px;
                backdrop-filter: blur(10px);
            }
    
            &_icon {
                gap: 24px;
                display: flex;
                align-items: center;
    
                @media screen and (max-width : 768px) {
                    gap: 16px;
                }
    
                img {
                    width: 32px;
                    height: 32px;
                    @media screen and (max-width : 768px) {
                        width: 22px;
                        height: 22px;
                    }
                }

                h1 {
                    margin: 0;
                    color: #FFFFFF;
                    font-size: 28px;
                    font-weight: 600;
                    line-height: 120%;
                    font-style: normal;
                    letter-spacing: 1px;
                    font-family: ${Denish};
                    @media screen and (max-width : 768px) {
                        font-size: 16px;
                    }
                }
            }
        }
    } 
`
export const LocationsSliderContainer = styled.div` 
    padding-bottom: 80px;
    @media screen and (max-width : 768px) {
        padding-left: 24px;
        padding-bottom: 32px;
    }

    .container-xl {
        padding: 0;
        padding-left: 38px
    }

    .location_heading {
        margin-bottom: 66px;
        @media screen and (max-width : 768px) {
            margin-bottom: 32px;
        }
        h1 {
            margin: 0;
            color: #FFFFFF;
            font-size: 48px;
            font-weight: 700;
            line-height: 56px;
            font-style: normal;
            text-align: center;
            font-family: ${Denish} !important;
            @media screen and (max-width : 768px) {
                font-size: 32px;
                font-weight: 500;
                line-height: 40px;
            }
        }        
    }
    
    .location_slider {
        margin-top: 38px;
        @media screen and (max-width : 520px) {
            margin-top: 24px;
        }
        &_link {
            padding-right: 38px;
        }
        
        .container {
            max-width: 1400px !important;
            margin-left: 0;
            padding: 0;
            padding-right: 18px;
            @media screen and (max-width : 1300px) {
                padding: 0;
                padding-right: 18px;
            }
            @media screen and (max-width : 1024px) {
                padding: 0;
                padding-right: 18px;
            }
            @media screen and (max-width : 870px) {
                padding: 0;
                padding-right: 18px;
            }
            @media screen and (max-width : 520px) {
                padding: 0;
                padding-right: 18px;
            }
        }

        &_heading {
            display: flex;
            color: #FFFFFF;
            align-items: center;
            margin-bottom: 24px;
            justify-content: space-between;
            @media screen and (max-width : 520px) {
                margin-bottom: 16px;
            }
        
            h1 {
                margin: 0;
                color: #ffffff;
                font-size: 32px;
                font-weight: 400;
                line-height: 140%;
                font-style: normal;
                font-family: ${Denish};

                @media screen and (max-width : 768px) {
                    font-size : 20px;
                }
            }

            a {
                margin: 0;
                color: #ffffff;
                font-size: 20px;
                font-weight: 500;
                line-height: 120%;
                font-style: normal;
                text-decoration: none;
                font-family: ${Avenir};

                @media screen and (max-width : 768px) {
                    font-size: 16px;
                }
            }
        } 

        &_section {
            .swiper-slide {
                overflow: hidden;
                .card-img {
                    transition: transform 300ms ease 100ms;
                   
                    
                }   
            }

            .swiper-button-prev, .swiper-button-next {
                top: 0;
                margin: 0;
                width: 90px;
                height: 100%;
                opacity: 0.8;
                mix-blend-mode: normal;
                &::after {
                    font-size: 25px;
                }

                @media screen and (max-width : 1024px) {
                    width: 57px;
                }
                @media screen and (max-width : 1023px) {
                    width: 178px;
                }
                @media screen and (max-width : 768px) {
                    width: 135px;
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
`
export const LuxuriCarsSliderContainer = styled.div`
    overflow: hidden;
    padding-top: 80px;
    position: relative;
    margin-bottom: 80px;
    padding-bottom: 80px;
    cursor: url(images/drag.svg), auto;
    background: radial-gradient(50% 192.44% at 50% 50%, #EEEDF2 0%, #CCC8CE 100%);
    @media screen and (max-width : 768px) {
        padding-bottom: 32px;
    }
    .swiper {
        width: 100%;
        padding-top: 20px;
        padding-bottom: 20px;
        cursor: url(images/drag.svg), auto;
      }
      
      .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 350px;
        cursor: url(images/drag.svg), auto;
        user-select: none;
      }
      
      .swiper-slide img {
        display: block;
        width: 100%;
        cursor: url(images/drag.svg), auto;
      }
        @media (max-width:450px) {
            .swiper-3d{
                perspective: 450px
              }
        }
      @media (max-width: 768px) {

       .swiper-slide {
            height: 200px;
          }
          
      }
      @media (min-width:760px){
        .swiper-slide-active {
            margin-right: 0px !important;
            margin-left: -20px !important;
            
          }
          .swiper-slide {
            height: 400px;
          }
          .swiper-slide-next {
            margin-right: 60px !important;
          }
    
          .swiper-slide-prev {
            margin-right: 0 !important;
            margin-left: 60px !important;
          }
      }
   
      .swiper-3d .swiper-slide-shadow-right {
        background-image: none !important;
      }
      .swiper-3d .swiper-slide-shadow-left {
        background-image: none !important;
      }

    .custom-cursor {
        z-index: 100;
        position: absolute;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            backdrop-filter: blur(2px);
        }
    }

    .container-xl {
        padding: 0;
    }
    
    .car_heading {
        h1 {
            margin: 0;
            color: #262626;
            font-size: 48px;
            font-weight: 700;
            line-height: 56px;
            font-style: normal;
            text-align: center;
            font-family: ${Denish} !important;

            @media screen and (max-width : 768px) {
                font-size: 32px;
                font-weight: 500;
                line-height: 40px;
            }
        }
    }

    .car_slider {
        z-index: 1;
        padding-top: 50px;
        user-select: none;
        position: relative;    
        padding-bottom: 50px;
        @media screen and (max-width : 768px) {
            padding-bottom: 20px;
        }

        // &::before {
        //     top: 80%;
        //     left: 50%;
        //     width: 100%;
        //     content: '';
        //     z-index: -1;
        //     opacity: 0.5;
        //     height: 175px;
        //     max-width: 720px;
        //     position: absolute;
        //     border-radius: 50%;
        //     background-size: contain;
        //     background-position: center;
        //     background-repeat: no-repeat;
        //     transform: translate(-50% ,-50%);
        //     background: linear-gradient(181.88deg, rgba(25, 17, 54, 0) 37.09%, #464646 98.41%);

        //     @media screen and (max-width : 1024px) {
        //         top: 75%;
        //         width: 520px;
        //         height: 175px;
        //     }
        //     @media screen and (max-width : 991px) {
        //         top: 80%;
        //         width: 420px;
        //         height: 165px;
        //     }
        //     @media screen and (max-width : 768px) {
        //             top: 75%;
        //         width: 400px;
        //         height: 100px;
        //     }
        //     @media screen and (max-width : 520px) {
        //         top: 70%;
        //         width: 250px;
        //         height: 72px;
        //     }
        // }

        .swiper-wrapper {
            align-items: center;
            height: 320px;
            
            .swiper-slide {
                height: 127px;

                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                    object-fit: contain;
                    transition: .5s ease;
                } 
            }
            
            .swiper-slide.swiper-slide-prev,
            .swiper-slide.swiper-slide-next {
                width: 260px !important;
                height: 173.66412353515625px;
                @media screen and (max-width : 768px) {
                    width: 200px !important;
                }
                @media screen and (max-width : 520px) {
                    height: 100px;
                    width: 140px !important;
                }
                @media screen and (max-width : 394px) {
                    width: 125px !important;
                }
                @media screen and (max-width : 376px) {
                    width: 110px !important;
                }
                @media screen and (max-width : 350px) {
                    height: 80px;
                }
            }
            
            .swiper-slide.swiper-slide-prev img {
                object-position: left;
                @media screen and (max-width : 768px) {
                    transform: scale(0.7)
                }
                @media screen and (max-width : 520px) {
                    transform: scale(0.9)
                }
            }
            
            .swiper-slide.swiper-slide-next img {
                object-position: right;
                @media screen and (max-width : 768px) {
                    transform: scale(0.7)
                }
                @media screen and (max-width : 520px) {
                    transform: scale(0.9)
                }
            }

            .swiper-slide.swiper-slide-active {
                height: 334px;
                transition: all 1.3s ease;
                @media screen and (max-width : 1024px) {
                    width: 330px !important;
                }
                @media screen and (max-width : 768px) {
                    width: 280px !important;
                }
                @media screen and (max-width : 520px) {
                    height: 139px;
                    width: 187px !important;
                }
                @media screen and (max-width : 350px) {
                    width: 130px !important;
                }

                img {
                    transform: scale(1.2);
                    @media screen and (max-width : 1024px) {
                        transform: scale(1.1);
                    }
                    @media screen and (max-width : 991px) {
                        transform: scale(1);
                    }
                }                
            }
        }
    }

    h6 {
        color: #262626;
        font-size: 32px;
        font-weight: 600;
        margin-top: 33px;
        line-height: 120%;
        font-style: normal;
        text-align: center;
        letter-spacing: 1px;
        margin-bottom: 48px;
        font-family: ${Denish};
        // color: rgba(255, 255, 255, 0.5);

        @media screen and (max-width : 768px) {
            font-size: 24px;
            margin-top: 33px;
            margin-bottom: 40px;
        }
        
        @media screen and (max-width : 520px) {
            margin: auto;
            width: 217px;
            font-size: 16px;
            margin-bottom: 20px;
        }
    }

    .car_explore {
        margin: 0px auto;
        max-width: 450px;
        mix-blend-mode: normal;
        backdrop-filter: blur(5.07556px);
        background: rgba(123, 123, 123, 0.7);
        transition: transform 300ms ease 100ms;
        // background: linear-gradient(0deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(92.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
        @media screen and (max-width : 768px ) {
            max-width: 310px;
            backdrop-filter: none;
        }
        // &:hover {
        //     background: linear-gradient(180deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(0deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(268.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
        // }

        button {
            gap: 24px;
            width: 100%;
            border: none;
            display: flex;
            outline: none;
            cursor: pointer;
            background: none;
            min-height: 83px;
            align-items: center;
            justify-content: center;

            @media screen and (max-width : 768px) {
                gap: 12px;
                min-height: 56px;
            }
           
            p {
                margin: 0;
                color: #FFFFFF;
                font-size: 24px;
                font-weight: 700;
                line-height: 140%;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};

                @media screen and (max-width : 768px) {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 20px;
                }
            }
        }
    }
`
export const LuxuryYachtsSliderContainer = styled.div`
    padding-bottom: 80px;
    @media screen and (max-width : 768px) {
        padding-bottom: 32px;
    }

    .yachts_heading {
        h1 {
            margin: 0;
            color: #FFFFFF;
            font-size: 48px;
            font-weight: 700;
            line-height: 56px;
            font-style: normal;
            text-align: center;
            font-family: ${Denish};
            @media screen and (max-width : 768px) {
                font-size: 32px;
                font-weight: 500;
                line-height: 40px;
            }
        }

        p {
            margin: 0;
            font-size: 20px;
            font-weight: 500;
            line-height: 120%;
            font-style: normal;
            font-family: ${Avenir};
        }
    }

    .yachts_slider {
        height: 100%;
        margin: 80px 0;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(images/yachtsSliderOne.png);
        @media screen and (max-width : 768px) {
            margin: 50px 0;
        }
        @media screen and (max-width : 520px) {
            margin: 32px 0;
        }

        .mySwiper {
            .swiper-button-prev, .swiper-button-next {
                top: 0;
                margin: 0;
                width: 183px;
                height: 100%;
                opacity: 0.3;
                mix-blend-mode: normal;
                &:after {
                    font-size: 35px;
                }
                @media screen and (max-width : 1024px) {
                    width: 150px;
                }
                @media screen and (max-width : 768px) {
                    width: 100px;
                }
                @media screen and (max-width : 520px) {
                    width: 51px;
                    &:after {
                        font-size: 18px;
                    }
                }
            }
           

            .swiper-button-prev {
                left: 0;
                background: linear-gradient(90deg, #0F0F0F 0%, rgba(39, 39, 39, 0.0001) 100%);
            }
    
            .swiper-button-next {
                right: 0;
                background: linear-gradient(90deg, rgba(39, 39, 39, 0.0001) 0%, #0F0F0F 100%);
            }
        }

        &_item {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            height: calc(100vh - 20px);
            justify-content: space-evenly;

            @media screen and (max-width : 520px){
                height: 100%;
                min-height: 316px;
            }

            &_heading {
                width: 100%;
                text-align: center;
                min-height: 90px;
                h1 {
                    margin: 0;
                    color: #FFFFFF;
                    font-size: 70px;
                    font-weight: 700;
                    font-style: normal;
                    font-family: ${Denish};
                    @media screen and (max-width : 768px) {
                        font-size: 40px;
                        font-weight: 500;
                        margin-top: 30px;
                    }
                    @media screen and (max-width : 520px) {
                        font-size: 24px;
                    }
                }
            }

            &_image {
                width: 100%;
                max-width: 800px;

                @media screen and (max-width : 1024px) { 
                    height: 250px;
                    max-width: 500px;
                }

                @media screen and (max-width : 520px) { 
                    height: 105px;
                    max-width: 276px;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }

            &_cards {
                gap: 74px;
                display: flex;
                min-height: 200px;
                @media screen and (max-width : 768px){
                    gap: 24px;
                }

                &_card {
                    width: 193px;
                    height: 137px;
                    display: flex;
                    position: relative;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    border: 1.08342px solid #C6C6C6;
                    backdrop-filter: blur(5.30656px);
                    background: rgba(40, 40, 40, 0.3);
                    @media screen and (max-width : 1024px){
                        width: 170px;
                        border: none;
                        height: 120px;
                        backdrop-filter: blur(2px);
                        outline: 0.1px solid #C6C6C6;
                    }

                    @media screen and (max-width : 768px){
                        width: 73px;
                        height: 56px;
                    }

                    img {
                        top: 13px;
                        right: 15px;
                        position: absolute;
                        @media screen and (max-width : 768px){
                            top: 5px;
                            width: 9px;
                            right: 5px; 
                            height: 7px;
                        }
                    }

                    h1 {
                        color: #FFFFFF;
                        font-size: 24px;
                        font-weight: 500;
                        line-height: 33px;
                        font-style: normal;
                        margin-bottom: 5px;
                        letter-spacing: 1px;
                        font-family:${Avenir};
                        @media screen and (max-width : 768px){
                           font-size: 15px;
                           line-height: 12px; 
                        }
                    }
                    p {
                        margin: 0;
                        color: #FFFFFF;
                        font-size: 28px;
                        font-weight: 300;
                        line-height: 33px;
                        font-style: normal;
                        letter-spacing: 1px;
                        font-family: SF Pro Text;
                        @media screen and (max-width : 768px){
                            font-size: 12px;
                            line-height: 12px; 
                        }
                    }
                }
            }
        }
    }
    
    .yachts_explore {
        margin: 0 auto;
        max-width: 450px;
        mix-blend-mode: normal;
        backdrop-filter: blur(5.07556px);
        transition: transform 300ms ease 100ms;
        background: linear-gradient(0deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(180deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(92.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
        @media screen and (max-width : 768px ) {
            max-width: 310px;
            backdrop-filter: none;
        }
        &:hover {
            background: linear-gradient(180deg, rgba(168, 168, 168, 0.2), rgba(168, 168, 168, 0.2)), linear-gradient(0deg, rgba(26, 26, 26, 0) 15.62%, rgba(26, 26, 26, 0.5) 100%), linear-gradient(268.06deg, rgba(255, 255, 255, 0.2) 16.43%, rgba(255, 255, 255, 0) 76.26%);
        }

        button {
            gap: 24px;
            width: 100%;
            border: none;
            display: flex;
            outline: none;
            cursor: pointer;
            background: none;
            min-height: 83px;
            align-items: center;
            justify-content: center;

            @media screen and (max-width : 768px) {
                gap: 12px;
                min-height: 56px;
            }
           
            p {
                margin: 0;
                color: #FFFFFF;
                font-size: 24px;
                font-weight: 700;
                line-height: 140%;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};

                @media screen and (max-width : 768px) {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 20px;
                }
            }
        }
    }
`
export const TestimonialSliderContainer = styled.div`
    padding-bottom: 80px;
    @media screen and (max-width : 768px) {
        padding-bottom: 32px;
    }

    .testimonial_heading {
        margin-bottom: 80px;
        @media screen and (max-width : 768px) {
            margin-bottom: 32px;
        }

        h1 {
            margin: 0;
            color: #FFFFFF;
            font-size: 48px;
            font-weight: 700;
            line-height: 56px;
            font-style: normal;
            text-align: center;
            font-family: ${Denish};
            @media screen and (max-width : 768px) {
                font-size: 32px;
                font-weight: 500;
                line-height: 40px;
            }
        }
    }

    .testimonial_slider {
        &_card {
            width: 100%;
            height: 100%;
            padding: 30px;
            cursor: pointer;
            max-width: 379px;
            overflow: hidden;
            min-height: 326px;
            transition: all .2s;
            background: rgba(66, 66, 66, 0.2);

            &:hover {
                border-left: 1px solid rgb(196 191 191 / 60%);
                &::before {
                    left: 0px;
                    right: 0px;
                    top: -0.5px;
                    height: 1px;
                    content: '';
                    width: 100%;
                    z-index: -5;
                    opacity: 0.6;
                    position: absolute;
                    transform: rotate(-0.25deg);
                    background: rgba(255,255,255,0.6);
                }
        
                &::after {
                    left: 0px;
                    right: 0px;
                    height: 1px;
                    content: '';
                    width: 100%;
                    z-index: -5;
                    opacity: 0.6;
                    bottom: -0.5px;
                    position: absolute;
                    transform: rotate(0.25deg);
                    background: rgba(255,255,255,0.6);
                }  
            }                
            
            @media screen and (max-width : 768px) {
                margin: 0 auto;
                padding: 15px 0;       
                min-height: 173px;
                padding-left: 30px;
                padding-right: 11px;
            }    

            &_profile {
                gap: 12px;
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 20px;

                &_img {
                    width: 54px;
                    height: 54px;
                    overflow: hidden;
                    border-radius: 50%;

                    @media screen and (max-width : 520px) {
                        width: 45px;
                        height: 45px;
                    }

                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                        object-position: center;
                    }
                }

                &_detail {
                    display: flex;
                    color: #FFFFFF;
                    flex-direction: column;

                    &_stars {
                        gap: 4px;
                        display: flex;
                        @media screen and (max-width : 768px) {
                            width: 16px;
                            height: 16px;
                        }

                        img {
                            @media screen and (max-width : 520px) {
                                width: 16px;
                                height: 16px;
                            }
                        }
                        
                    }
                    > img {
                        top: 24px;
                        right: 18px;
                        width: 31px;
                        height: 31px;
                        position: absolute;

                        @media screen and (max-width : 768px) {
                            top: 16px;
                            right: 16px;
                            width: 24px;
                            height: 24px;
                        }
                    }

                    p {
                        color: #FFFFFF;
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 24px;
                        font-style: normal;
                        margin-bottom: 4px;
                        letter-spacing: 1px;
                        font-family: ${Denish};
                        @media screen and (max-width : 768px) {
                            font-size: 18px;
                            line-height: 21px;
                        }
                    }
                }
            }

            &_message {
                p {
                    margin: 0;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 29px;
                    font-style: normal;
                    font-family:${Avenir};
                    color: rgba(255, 255, 255, 0.8) !important;
                    
                    @media screen and (max-width : 768px) {
                        font-size: 14px;
                        line-height: 24px;
                    }

                    button {
                        border: none;
                        outline: none;
                        color: #FFFFFF;
                        margin-left: 5px;
                        letter-spacing: 0.5px;
                        background: transparent;
                        text-decoration: underline;
                        
                        img {
                            margin-top: 20px;
                            @media screen and (max-width : 520px) {
                                width: 28px;
                            }
                        }
                    }
                }
            }
        }

        .custom-pagination {
            color: #FFFFFF;
            font-size: 24px;
            font-weight: 400;
            margin-top: 80px;
            line-height: 33px;
            font-style: normal;
            text-align: center;
            font-family: ${Avenir};

            @media screen and (max-width : 768px) {
                font-size: 18px;
                margin-top: 10px;
                font-weight: 600;
                line-height: 21px;
                font-style: normal;
                font-family: ${Denish};
            }            
        }

        .swiper {
            .swiper-button-prev, .swiper-button-next {
                top: 0;
                margin: 0;
                width: 88px;
                height: 100%;
                opacity: 0.8;
                max-height: 326px;
                mix-blend-mode: normal;
                &::after {
                    font-size: 25px;
                }
                @media screen and (max-width : 1024px) {
                    width: 57px;
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

            .swiper-wrapper {
                @media screen and (max-width : 520px) {
                    transform: translate3d(0px,0,0);
                }

                .swiper-slide.swiper-slide-active .testimonial_slider_card {
                    z-index: 1;
                    position: relative;
    
                    &::before {
                        top: 0;
                        left: 0;
                        width: 100%;
                        content: '';
                        z-index: -1;
                        height: 100%;
                        position: absolute;
                        transition: all .3s;
                        background-size: 100% 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-image: url("images/testimonial-bg.png");
                    }
    
                    &:hover {
                        border-left: none;
                        &::before {
                            transform: scaleX(-1);
                        }
                    }
                }
            }
        }   
    }
`
export const InstagramSectionContainer = styled.div`
    padding-bottom: 80px;
    @media screen and (max-width : 768px) {
        padding-bottom: 32px;
    }

    .container {
        padding: 0;
    }

    .instagram_section {
        text-align: center;
        &_heading {
            margin-bottom: 64px;
            @media screen and (max-width : 768px) {
                margin-bottom: 32px;
            }
            h1 {
                margin: 0;
                color: #FFFFFF;
                font-size: 48px;
                font-weight: 700;
                line-height: 56px;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish};
                @media screen and (max-width : 768px) {
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 40px;
                }
            }
        }

        &_gallary {
            display: grid;
            row-gap: 11px;
            column-gap: 12px;
            grid-template-columns: repeat(3 , 1fr);
            
            @media screen and (max-width : 768px) {
                row-gap: 3px;
                column-gap: 3px;
            }

            &_img {
                width: 100%;
                height: 396px;
                max-width: 389px;
                overflow: hidden;
                @media screen and (max-width : 520px) {
                    height: 132px;
                }
                 
                img {
                    width: 100%;
                    height: 100%;
                    transition: transform 300ms ease 100ms; 
                }
            }
        }
    }
`
export const FirstOneToKnowContainer = styled.div`
    width: 100%;
    margin: auto;
    max-width: 636px;
    padding-bottom: 80px;
    @media screen and (max-width : 768px) {
        padding-bottom: 32px;
    }
    @media screen and (max-width : 520px) {
        max-width: 311px;
    }

    .container {
        padding: 0;
    }

    .cta {
        &_heading {
            margin-bottom: 24px;
            h1 {
                margin: 0;
                color: #FFFFFF;
                font-size: 40px;
                font-weight: 600;
                line-height: 77px;
                text-align: center;
                font-style: normal;
                letter-spacing: 1px;
                font-family: ${Denish}; 
                text-transform: capitalize;
                @media screen and (max-width : 768px) {
                    font-size: 30px;
                }
                @media screen and (max-width : 520px) {
                    font-size: 24px;
                    text-align: left;
                    line-height: 28px;  
                    text-transform: none;
                }
            }
        }

        &_form {
            form {
                height: 70px;
                display: flex;
                align-items: center;
                box-shadow: 0px 25.5271px 31.9089px rgba(7, 41, 50, 0.16);

                @media screen and (max-width : 425px) {
                    height: 57px;
                }
                
                input {
                    width: 100%;
                    border: none;
                    height: 100%;
                    padding: 0 25px;
                    letter-spacing: 0.5px;
                    @media screen and (max-width : 520px){
                        padding: 0 16px;
                    }
    
                    ::placeholder {
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 23px;
                        font-style: normal;
                        font-family: ${Denish};
                        color: rgba(0, 0, 0, 0.5);
                        @media screen and (max-width : 520px){
                            font-size: 14px;
                            font-weight: 500;
                            line-height: 18px;
                            font-style: normal;
                            font-family: ${Avenir};
                        }
                    }
                }
    
                button {
                    width: 100%;
                    height: 100%;
                    border: none;
                    cursor: pointer;
                    max-width: 113.48px;
                    background: #000000;
    
                    &:hover {
                        background: #0d0a0a80;
                    }
    
                    @media screen and (max-width : 425px) {
                        height: 57px;
                        max-width: 60px;
                    }
    
                    img {
                        width: 25px;
                        height: 25px;
                    }
    
                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
`
export const TrustedBySectionContainer = styled.div`
    display: none;
    padding-bottom: 80px;
    @media screen and (max-width : 768px) {
        padding-bottom: 32px;
    }

    .trustedClient_section {
        &_heading {
            margin-bottom: 80px;
            @media screen and (max-width : 768px) {
                margin-bottom: 32px;
            }
            h1 {
                margin: 0;
                color: #FFFFFF;
                font-size: 48px;
                font-weight: 700;
                line-height: 120%;
                font-style: normal;
                text-align: center;
                font-family: ${Denish};
                @media screen and (max-width : 768px) {
                    display: none;
                }
                
            }
            h1:last-child {
                display: none;
                font-size: 32px;
                font-weight: 500;
                line-height: 40px;
                @media screen and (max-width : 768px) {
                    display: block;
                }
            }
        }

        &_slider {
            gap: 24px;
            display: flex;
            flex-wrap: wrap;
            @media screen and (max-width : 520px) {
                display: none;
            } 
        }

        &_slider_mobile {
            display: none;
            @media screen and (max-width : 520px) {
                display: block;
            }

            .trusted-clients-slider_item {
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }    
        
        .trusted-clients-slider {
            &_item {
                width: 165px;
                height: 135px;
                display: flex;
                align-items: center;
                justify-content: center;
                @media screen and (max-width : 520px) {
                    width: 100px;
                    height: 80px;
                    backdrop-filter: blur(27.4229px);   
                    background: rgba(66, 66, 66, 0.2);
                }
                
                img {
                    cursor: pointer;
                    filter: brightness(0.7);
                    &:hover {
                        filter: brightness(1)
                    }
                    @media screen and (max-width : 520px) {
                        padding: 13px;
                        filter: brightness(1)
                    }
                }
            }
        } 
    }
`