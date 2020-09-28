import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pro from "../assets/Images/pro.JPG";
import Button from 'react-bootstrap/Button'
import "./about.css";

function About(){
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
                        <p>Check out my work</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button id="portBtn" size="lg">
                            My Portfolio
                        </Button>
                        <Button id="tactBtn" size="lg">
                            Contact Me
                        </Button>
                    </Col>
                </Row>                  
            </Container>
        </div>
    )
}

export default About;