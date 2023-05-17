import React, { useState, useEffect } from "react";
import OffCanvasNav from "./offCanvas";
import { NavBarContainer } from "./style";
import { Container } from "@mui/material";
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import SearchModal from 'common/searchModalScenario';

const Index = () => {
  const [navToggler, setNavToggler] = useState(false);
  const [fromNavbar, setFromNavbar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [navCanvasOpen, setNavCanvasOpen] = useState(false);
  const [searchModalState, setSearchModalState] = useState(false);

  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  });

  const handleVillaCity = (e) => {
    setSearchModalState(true)
    setFromNavbar(true)
  }

  useEffect(() => {
    if (width < 991) {
      setNavToggler(true);
    }
    else {
      setNavToggler(false);
    }
  }, [width]);

  return (
    <React.Fragment>
      {searchModalState && <SearchModal setSearchModalState={setSearchModalState} fromNavbar={fromNavbar} />}
      <NavBarContainer>
        <OffCanvasNav show={navCanvasOpen} handleClose={() => setNavCanvasOpen(!navCanvasOpen)} handleVillaCity={handleVillaCity} />
        <Container sx={{ maxWidth: "1200px" }} maxWidth={false} disableGutters>
          <Navbar className='main_navbar'>
            <div className='main_navbar_logo'>
              <Link to='/'>
                <img src='images/luxury2-logo.svg' alt='logo' />
              </Link>
            </div>
            <div className='main_navbar_menu'>
              <div className={navToggler ? "main_navbar_menu_items toggler-active" : "main_navbar_menu_items"}>
                <p
                  activeclassname='active'
                  onClick={(e) => handleVillaCity(e)}
                  activeStyle={{ color: "white", opacity: '1' }}
                >
                  Villas
                </p>
                <NavLink
                  activeclassname='active'
                  to='/luxury-car-rentals-miami'
                  activeStyle={{ color: "white", opacity: '1' }}
                >
                  Cars
                </NavLink>
                <NavLink
                  activeclassname='active'
                  to='/luxury-yacht-rentals-miami'
                  activeStyle={{ color: "white", opacity: '1' }}
                >
                  Yachts
                </NavLink>
                <NavLink
                  to='/concierge-services'
                  activeclassname='active'
                  activeStyle={{ color: "white", opacity: '1' }}
                >
                  Concierge
                </NavLink>
                <NavLink
                  activeclassname='active'
                  to='/contact-luxuri-team'
                  activeStyle={{ color: "white", opacity: '1' }}
                >
                  Contact us
                </NavLink>
              </div>
              <div
                className='navbar-toggler'
                onClick={() => setNavCanvasOpen(true)}
              >
                <img src='images/bars.svg' alt='times' />
              </div>
            </div>
          </Navbar>
        </Container>
      </NavBarContainer>
    </React.Fragment>
  );
};

export default Index;