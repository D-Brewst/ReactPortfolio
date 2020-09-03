import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio(){
    return (
    <Container>
        <Row>
            {projects.map((project) => (
          <Col md={4}>
            <Project 
                title={project.title}
                image={project.image}
                link={project.link}
                key={project.id} />
          </Col>))}
        </Row>
    </Container>
    )
}

export default Portfolio;