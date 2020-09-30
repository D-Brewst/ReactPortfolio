import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pro from "../assets/Images/pro.JPG";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import "./about.css";

function About(){
    const history = useHistory();
    const redirectPortfolio = () => history.push("/Portfolio");
    const redirectContact = () => history.push("/Contact");

    return (
        <div>
            <Jumbotron fluid className="jumbo"></Jumbotron>
            <Container id="content">
                <Row>
                    <img id="pic" src={pro} alt="pic"/>
                </Row>
                <Row>
                    <Col>
                        <h1>I'm Devon, a Full Stack Developer.</h1>
                        <p>I am a recent coding bootcamp gradate, with a strong passion for code. I am looking for the opportunity be become apart of a great development team. Check out my work and feel free to contact me.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="portBtn" size="lg" onClick={redirectPortfolio}>
                            My Portfolio
                        </Button>
                        <Button id="tactBtn" size="lg" onClick={redirectContact}>
                            Contact Me
                        </Button>
                    </Col>
                </Row>                  
            </Container>
        </div>
    )
}

export default About;