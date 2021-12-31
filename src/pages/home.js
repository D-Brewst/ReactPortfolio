import React from "react";
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import pro from "../assets/Images/pro.JPG";
// import { useHistory } from "react-router-dom";
import "./home.css";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";
import { HashLink as Link } from 'react-router-hash-link';

function Home(){
    // const history = useHistory();
    // const redirectPortfolio = () => history.push("/Portfolio");
    // const redirectContact = () => history.push("/Contact");

    return (
        <div>
            <MDBJumbotron fluid className="jumbo"></MDBJumbotron>
            <MDBContainer id="content">
                <MDBRow>
                    <img id="pic" src={pro} alt="pic"/>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <h1>I'm Devon,</h1>
                        <p>A passionate software engineer. <Link id="foliolink" to="/#folio">Check out my work</Link> and feel free to <Link id="foliolink" to="/#connect">contact me</Link>.</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <Link to="/#aboutme">
                            <button id="portBtn">
                                Learn More About Me
                            </button>
                        </Link>
                    </MDBCol>
                </MDBRow>             
            </MDBContainer>
            <MDBContainer id="aboutsection">
                <About />
            </MDBContainer>
            <MDBContainer fluid id="folio">
                <Portfolio />
            </MDBContainer>
            <MDBContainer fluid id="connect">
                <Contact />
            </MDBContainer>
        </div>
    )
}

export default Home;