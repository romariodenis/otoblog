import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";

import Oto from '../../src/assets/email-signature.gif';

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <img src={Oto}
            style={{ width: "130px", marginRight: "20px" }}  alt="down-arrow" />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" marginLeft="100px" navbar>
              <NavItem>
                <NavLink 
                style={{
                  fontcolor: "#14142b",
                  fontSize: "12px",
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: 800
                }} href="">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                style={{
                  fontcolor: "#14142b",
                  fontSize: "12px",
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: 800
                }} href="">
                  Karir
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                style={{
                  fontcolor: "#14142b",
                  fontSize: "12px",
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: 800
                }} href="">
                  Mitra
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                style={{
                  fontcolor: "#14142b",
                  fontSize: "12px",
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: 800
                }} href="">
                  Tentang
                </NavLink>
              </NavItem>
             
            </Nav>
            <NavbarText
            style={{
                  fontcolor: "#14142b",
                  fontSize: "14px",
                  fontFamily: "Poppins,sans-serif",
                  fontWeight: 800
                }}>Admin</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
