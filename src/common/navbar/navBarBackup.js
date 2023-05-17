
import React, { useState } from 'react';
import { Container } from "@mui/material";
import { NavBarContainer } from './styled';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Index = () => {
    const [navToggler, setnavToggler] = useState(false);

    const navigateHandler = (redirectUrl) => {
        window.location.assign(redirectUrl)
    }

    return (
        <NavBarContainer>
            <Container sx={{ maxWidth: '1200px' }} maxWidth={false} disableGutters>
                <Navbar className="main_navbar">
                    <div className="main_navbar-logo">
                        <Link to='/' >
                            <img src='images/classic-logo---white_1.png' alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-outer">
                        <div className={navToggler ? 'navbar-navItem toggler-active' : 'navbar-navItem'}>
                            <div className='navbar-outer_mobile_title' >
                                <span onClick={() => setnavToggler(!navToggler)}>
                                    <img src='images/arrowMenu.svg' alt='arrowMenu' />
                                </span>
                                <label>Menu</label>
                            </div>
                            <NavLink className='navbar-outer-home-element' exact activeclassname="active" to="/">
                                Home
                            </NavLink>
                            {/* <NavDropdown title="Villas" className='villasDropDown' >
                                <NavDropdown.Item as={Link} to="/miami">Miami</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/aspen">Aspen</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/fort">Fort Lauderdate</NavDropdown.Item>
                            </NavDropdown> */}
                            <NavLink activeclassname="active" onClick={() => navigateHandler('https://luxuri.com/luxury-car-rentals-miami?checkInDate=2022-09-07&checkOutDate=2022-09-08&sortOrder=low_to_high&lowerValue=0&upperValue=200000&scrollPosition=0&make=&model=')} to="#">
                                Cars
                            </NavLink>
                            <NavLink activeclassname="active" onClick={() => navigateHandler('https://luxuri.com/luxury-yacht-rentals-miami?checkInDate=2022-09-07&sortOrder=length_low_to_high&lowerValue=0&upperValue=600&scrollPosition=0')} to="#">
                                Yachts
                            </NavLink>
                            <NavLink activeclassname="active" onClick={() => navigateHandler('https://luxuri.com/contact-luxuri-team')} to="/#contactus">
                                Contact us
                            </NavLink>
                        </div>
                        <div className="navbar-toggler" onClick={() => setnavToggler(!navToggler)}>
                            {navToggler ? <img src='images/times.png' alt="times" /> : <img src='images/bars.svg' alt="bars" />}
                        </div>
                    </div>
                </Navbar>
            </Container>
        </NavBarContainer>
    );
};

export default Index;