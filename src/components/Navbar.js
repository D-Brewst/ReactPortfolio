// import React from "react";
// import Navbar from 'react-bootstrap/Navbar';
// import {Nav} from "react-bootstrap";
// import {Button} from "react-bootstrap";
// import trimmed from "../assets/Images/trimmed.PNG"
// import "./navbar.css";

// function MyNavbar(){
//     return (
//         <div>
//             <Navbar id="nav" variant="dark" style={{backgroundColor: "black"}} expand="lg">
//                 <Navbar.Brand href="/">Devon Brewster</Navbar.Brand>
//                 <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </Button>
                
//                 <div className= "collapse navbar-collapse" id="navbarTogglerDemo01">
//                     <Nav className="navbar-nav ml-auto">
//                         <Nav.Link className="nav-item" href="/">About</Nav.Link>
//                         <Nav.Link className="nav-item" href="/Portfolio">Portfolio</Nav.Link>
//                         <Nav.Link className="nav-item" href="/Contact">Contact</Nav.Link>
//                     </Nav>
//                 </div>
//             </Navbar>
//             <div id="logo">
//                 <img id="img" src={trimmed} alt="logo"/>
//             </div>
//         </div>

//     )
// }

// export default MyNavbar;


import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import "./navbar.css";
import trimmed from "../assets/Images/trimmed.PNG"
import { HashLink as Link } from 'react-router-hash-link';

class MyNavbar extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    return (
        <MDBContainer fluid id="navcontainer">
          <MDBNavbar
            id="nav"
            dark
          >
            <MDBContainer id="innercontainer">
              <MDBNavbarBrand href="/" ><img id="img" src={trimmed} alt="logo"/></MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse
                id='navbarCollapse1'
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active className="barlink">
                    <Link className="link" to='/#aboutsection'>About</Link>
                  </MDBNavItem>
                  <MDBNavItem active className="barlink">
                    <Link className="link" to='/#folio'>Portfolio</Link>
                  </MDBNavItem>
                  <MDBNavItem active className="barlink">
                    <Link className="link" to='/#connect'>Contact</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
    );
  }
}

export default MyNavbar;