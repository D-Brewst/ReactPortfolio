import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import pro from "../assets/Images/pro.JPG";
import { useHistory } from "react-router-dom";
import "./home.css";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

function Home(){
    const history = useHistory();
    const redirectPortfolio = () => history.push("/Portfolio");
    const redirectContact = () => history.push("/Contact");

    return (
        <div>
            <MDBJumbotron fluid className="jumbo"></MDBJumbotron>
            <MDBContainer id="content">
                <MDBRow>
                    <img id="pic" src={pro} alt="pic"/>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <h1>I'm Devon, a Full Stack Developer.</h1>
                        <p>I am a recent coding bootcamp gradate with a strong passion for code. I am looking for the opportunity be become apart of a great development team. Check out my work and feel free to contact me.</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBBtn id="portBtn" size="lg" onClick={redirectPortfolio}>
                            My Portfolio
                        </MDBBtn>
                        <MDBBtn id="tactBtn" size="lg" onClick={redirectContact}>
                            Contact Me
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>             
            </MDBContainer>
            <MDBContainer>
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