import styled from 'styled-components';


export const ProductImageSlider = styled.div`
   background-image: url(${ props => props.sliderImage});
    background-position: center;
    background-repeat: no - repeat;
    background-size: cover;
    height: 278px;
    width: 100%;
    position: relative;

    button{
        position: absolute;
        bottom: 8px;
        right: 8px;
    }
`