import styled from 'styled-components';

export const ProductImagesSlider = styled.div`
  min-height: 278px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.sliderImage});

  button {
    left: 50%;
    bottom: 0;
    position: absolute;
    transform: translate(-50%, -50%);
  }
`

export const SimilarVillasContainer = styled.div`
  .swiper-slide-active {
    button {
      transition: all 1.5s;
      transition-delay: 300ms;
      transform: translate(-50%, -350%);
    }
  }
  .similarProductSlider .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    .swiper-pagination-bullet {
      width: 4px;
      height: 4px;
      background: white;
      border-radius: 0px;
      display: block !important;
    }
  }
`