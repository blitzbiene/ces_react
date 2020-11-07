import React from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {NavLink,Link} from "react-router-dom"

import './Header.css';

import logo from '../../images/logos/ceslogo.png';
import vlogo from '../../images/vidhaan/vidhaan_logo.png';

class Header extends React.Component{



    render(){

        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand bg="light"href="/"><img width="50" height="50" src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/vidhaan" exact>Vidhaan</Nav.Link>
                <Nav.Link as={NavLink} to="/team" exact>Team</Nav.Link>
                

                <NavDropdown title="Mridang" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to='/mridang'>Edition 1</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Gallery" id="basic-nav-dropdown">
                  <NavDropdown.Item as={NavLink} to='/gallery/vidhaan'>Vidaaan</NavDropdown.Item>
                  <NavDropdown.Item  as={NavLink} to='/gallery/cpl'>CPL</NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to='/gallery/guestlecture'>Guest Lecture</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/aboutus" exact>About Us</Nav.Link>
                <Nav.Link as={NavLink} to="/certificate" exact>Certificate Verification</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="header__visible">
             
            <Navbar.Brand bg="light"><Link to="/cpl"><img width="50" height="50" src={logo} alt="logo"/></Link></Navbar.Brand>
            <div style={{backgroundColor:"grey",display:"inline-block",width:"51px",height:"60px",padding:"0px"}} >
            <Navbar.Brand bg="light"><Link to="/vidhaan"><img width="40" height="40" src={vlogo} alt="cpllogo"/></Link></Navbar.Brand>
            </div>
            </div>
          </Navbar>
        );
    }
}
export default Header;

