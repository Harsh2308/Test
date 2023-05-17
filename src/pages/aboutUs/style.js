import styled from 'styled-components';
import { Avenir, DarkBGColor, Denish, Inter } from '../../common/globalStyle';


export const AboutUsStyledContainer = styled.div`
    padding-top: 100px;
    padding-bottom: 80px;
    background-color: ${DarkBGColor};
    @media screen and (max-width: 675px) {
        padding-top: 90px;
    }

.aboutus-main {
    // padding-top: 100px;
    // padding-bottom: 180px;
    // background-color: #2C2C2C;
}

.aboutus-main .aboutus-container {
    max-width: 1100px;
    margin: auto;
    padding: 0 20px;
}

.aboutus-main .about-title {
    font-family: ${Denish};
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
    text-align: center;
    margin: 80px 0;
    letter-spacing: 1px;
}

.aboutus-main .cards-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 80px;
}

.about-card .image-container {
    grid-area: image;
}

.about-card .text-container {
    grid-area: text;
}

.about-card .designation-container {
    grid-area: desig;
}

.about-card {
    display: grid;
    grid-template-columns: 478px minmax(0, 382px) 128px;
    gap: 40px;
    grid-template-areas: "image text desig";
    justify-content: center;
}

.about-card:nth-child(even) {
    direction: rtl;
}

.about-card:nth-child(even) .text-container {
    text-align: left;
}

.about-card .image-container img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.about-card .text-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-card .text-container .inner-text {
    min-height: 262px;
    max-width: 382px;
    width: 100%;
}

.about-card .text-container .inner-text .designation {
    font-family: ${Avenir};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    opacity: 0.9;
    margin-bottom: 16px;
}

.about-card .text-container .inner-text .name {
    font-family: ${Inter};
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    letter-spacing: 1px;
    margin-bottom: 24px;
}

.about-card .text-container .inner-text .para {
    font-family: ${Avenir};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 1px;
    color: #FFFFFF;
    opacity: 0.8;
}

.about-card .designation-container {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-card .designation-container .desig-title {
    font-family: ${Denish};
    font-style: normal;
    font-weight: 500;
    font-size: 110px;
    line-height: 130px;
    text-align: center;
    letter-spacing: -0.5px;
    color: rgba(209, 209, 214, 0.4);

    text-orientation: mixed;
    writing-mode: vertical-lr;
}

@media only screen and (max-width: 991px) {
    .about-card {
        grid-template-columns: minmax(0, 478px) 128px;
        grid-template-areas: "image desig"
            "text text";
        justify-content: center;
        gap: 30px;
    }

    .about-card .text-container {
        justify-content: flex-start;
    }

    .about-card:nth-child(even) .text-container {
        justify-content: flex-end;
    }
  

    .about-card .text-container .inner-text {
        min-height: auto;
    }
}

@media only screen and (max-width: 675px) {
    .about-card {
        grid-template-columns: minmax(0, 280px) 70px;
        grid-template-areas: "image desig"
            "text text";
        justify-content: center;
        gap: 20px;
    }

    .about-card{
        direction:ltr !important;
    }
  

    .aboutus-main .about-title {
        font-weight: 700;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: 0.905797px;
        margin: 30px 0;
    }

    .about-card .image-container {
        max-height: 311px;
        max-width: 280px;
    }

    .aboutus-container {
        padding: 0 24px;
    }

    .about-card .designation-container .desig-title {
        font-weight: 700;
        font-size: 56px;
        line-height: 66px;
        text-align: center;
        letter-spacing: -0.5px;
    }

    .cards-container{
        gap: 0;
    }

    .aboutus-main {
        padding-top: 30px;
        // padding-bottom: 100px;
    }
    .about-card .text-container .inner-text .designation{
        font-weight:400;
        // margin-top:24px;
        // margin-bottom:24px;
    }
    .about-card .text-container .inner-text .name {
        font-size: 24px;
        line-height: 29px;
    }

    .about-card .text-container .inner-text .para {
        font-weight: 400;
        font-size: 16px;
    }
}

@media only screen and (max-width: 420px) {
    .about-card .text-container .inner-text .designation{
        font-weight:400;
        margin-top:24px;
        margin-bottom:24px;
    }
    .about-card {
        gap: 10px;
    }
}



`

