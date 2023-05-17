import styled from 'styled-components'

export const GalleryModalContainer = styled.div`

`

export const ModalCrossIcon = styled.div`
    img {
        top: 32px;
        right: 32px;
        z-index: 1000;
        cursor: pointer;
        position: absolute;

        @media screen and (max-width : 768px) {
            width: 16px;
            height: 16px;
        }
    }     
    
    @media screen and (max-width : 586px) {
        .mobileView{
            display: none;
        }
    }
`