import styled from 'styled-components';

export const ChildVillaCard = styled.div`
.swiper {
.swiper-button-next {
    display: flex;
    background: none !important;
    outline: none !important;
    color: white !important;
    &::after {
        font-size: 12px !important;
        background-color: white !important;
        height: 20px !important;
        width: 20px !important;
        cursor: pointer !important;
        border-radius: 50% !important;
        padding-left: 8px !important;
        padding-top: 4px !important;
    }
}
.swiper-button-prev {
    display: flex;
    background: none !important;
    outline: none !important;
    color: white !important;
    &::after {
        font-size: 12px !important;
        background-color: white !important;
        height: 20px !important;
        width: 20px !important;
        cursor: pointer !important;
        border-radius: 50% !important;
        padding-left: 6px !important;
        padding-top: 4px !important;

    }
}
}
`

export const SimilarVillasContainer = styled.div`
.swiper {
    .swiper-button-next.swiper-button-disabled,
    .swiper-button-prev.swiper-button-disabled {
    display: none;
    }
    .swiper-button-prev, .swiper-button-next {
        top: 0;
        margin: 0;
        width: 88px;
        height: 100%;
        opacity: 0.8;
        max-height: 340px;
        mix-blend-mode: normal;
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
`