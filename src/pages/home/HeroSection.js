import React, { useState } from "react";
import { HeroSectionContainer } from "./style";
import OffCanvasNav from "common/navbar/offCanvas";

const Index = ({ setSearchModalState }) => {
  const [navCanvasOpen, setNavCanvasOpen] = useState(false);

  return (
    <HeroSectionContainer>
      <OffCanvasNav show={navCanvasOpen} handleClose={() => setNavCanvasOpen(!navCanvasOpen)} />
      <div className="heroSection">
        <div className="heroSection_BG-video">
          <video src="videos/luxury-new-video.m4v" muted autoPlay loop>
          </video>
        </div>
        <div className="heroSection_BG-image"></div>
        {/* <div className="heroSection_luxury-water">
          <img src="images/luxury-water.svg" alt="text" />
        </div> */}
        <div
          className="heroSection_searchBar"
          onClick={() => setSearchModalState(true)}
        >
          <div className="heroSection_searchBar_icon">
            <img src="images/searchIcon.svg" alt="searchIon" />
            <h1>Search Villas</h1>
          </div>
        </div>
      </div>
    </HeroSectionContainer>
  );
};

export default Index;