import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";

function MyNavbar(){
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Devon Brewster</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Portfolio</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavbar;