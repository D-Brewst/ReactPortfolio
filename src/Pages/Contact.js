import React from "react";
import {Form} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css"

function Contact(){
    return(
        <Container className="Contact">
            <Row>
                <Col>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Your Name" />
                    </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Enter your message here." />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
        </Container>
        
            
    )
}

export default Contact;