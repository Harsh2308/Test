import React from "react";
import { NavLink } from "react-router-dom";
import { OffCanvasContainer } from "./style";
import Offcanvas from "react-bootstrap/Offcanvas";

const Index = ({ show, name, handleClose, handleVillaCity, ...props }) => {

  const handleVillas = () => {
    handleClose()
    handleVillaCity()
    document.querySelector("body").style.overflow = 'hidden';
  }

  return (
    <Offcanvas
      {...props}
      show={show}
      placement='end'
      onHide={handleClose}
      className='offCanvasnav'
      style={{ width: '100%', backdropFilter: 'blur(5px)' }}
    >
      <Offcanvas.Body>
        <OffCanvasContainer>
          <div className="offCanvas_content">
            <div className="offCanvasnav_content_crossIcon" onClick={() => handleClose()}>
              <img src='images/modelCrossIconWhite.svg' alt="cross-icon" />
            </div>
            <div className='offCanvasnav_content_items'>
              <NavLink
                to='/#'
                onClick={handleVillas}
                activeclassname='active'
                activeStyle={{ color: "white", fontWeight: "500" }}
              >
                Villas
              </NavLink>

              <NavLink
                activeclassname='active'
                onClick={() => handleClose()}
                to='/luxury-car-rentals-miami'
                activeStyle={{ color: "white", fontWeight: "500" }}
              >
                Cars
              </NavLink>
              <NavLink
                activeclassname='active'
                onClick={() => handleClose()}
                to='/luxury-yacht-rentals-miami'
                activeStyle={{ color: "white", fontWeight: "500" }}
              >
                Yachts
              </NavLink>

              <NavLink
                to='/concierge-services'
                activeclassname='active'
                onClick={() => handleClose()}
                activeStyle={{ color: "white", fontWeight: "500" }}
              >
                Concierge
              </NavLink>

              <NavLink
                activeclassname='active'
                to='/contact-luxuri-team'
                onClick={() => handleClose()}
                activeStyle={{ color: "white", fontWeight: "500" }}
              >
                Contact us
              </NavLink>
            </div>
          </div>
        </OffCanvasContainer>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Index;