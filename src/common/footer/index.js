import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from './style';
import { useLocation } from "react-router-dom";
import SearchModal from 'common/searchModalScenario';

const Index = () => {
    const location = useLocation().pathname
    const [fromFooter, setFromFooter] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [searchModalState, setSearchModalState] = useState(false);

    window.addEventListener('resize', function () {
        setWidth(window.innerWidth);
    })

    const handleVillaCity = () => {
        setSearchModalState(true)
        setFromFooter(true)
    }

    return (
        <React.Fragment>
            {searchModalState && <SearchModal setSearchModalState={setSearchModalState} fromFooter={fromFooter} />}
            <FooterContainer>
                <div className="container">
                    <div className="footer_section">
                        <div className="footer_section_logo">
                            <img src="images/classic-logo---white_1-p-800.png" alt='classic-logo---white_1-p-800.png' />
                        </div>
                        <div className="footer_section_links">
                            <ul>
                                <li><Link className={location === '/' ? 'footerActiveClass' : ''} to='/'>Home</Link></li>
                                <li><p onClick={handleVillaCity}>Villas</p></li>
                                <li><Link className={location === '/luxury-car-rentals-miami' ? 'footerActiveClass' : ''} to="/luxury-car-rentals-miami">Cars</Link></li>
                                <li><Link className={location === '/luxury-yacht-rentals-miami' ? 'footerActiveClass' : ''} to="/luxury-yacht-rentals-miami">Yachts</Link></li>
                                <li><Link className={location === '/contact-luxuri-team' ? 'footerActiveClass' : ''} to="/contact-luxuri-team">Contact Us</Link></li>
                                <li><Link className={location === '/concierge-services' ? 'footerActiveClass' : ''} to="/concierge-services">Concierge</Link></li>
                            </ul>
                        </div>
                        <div className="footer_section_socialIcon">
                            <p>Terms of Use</p>
                            <div className="footer_section_socialIcon_icons" >
                                <div className="footer_section_socialIcon_icons_icon"><a href="https://facebook.com"><img src="images/facebookIcon.svg" alt='facebook.svg' /></a></div>
                                <div className="footer_section_socialIcon_icons_icon"><a href="https://twitter.com"><img src="images/twitterIcon.svg" alt='twitter.svg' /></a></div>
                                <div className="footer_section_socialIcon_icons_icon"><a href="https://g.page/luxurimiami"><img src="images/googleIcon.svg" alt='google.svg' /></a></div>
                            </div>
                            <p>Privacy Policy</p>
                        </div>
                        <p>Copyright © 2022 LUXURI.</p>
                        <p className="reserved">All Rights Reserved.</p>
                        {width < 520 && (
                            <div className="footer_section_terms_mobile">
                                <p>Terms of Use</p>
                                <p>Privacy Policy</p>
                            </div>
                        )}
                    </div>
                </div>
            </FooterContainer>
        </React.Fragment>
    );
}

export default Index;