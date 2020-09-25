import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

function Project(props){
    return (
        <Card className="card h-100" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary" href={props.link}>Go to site</Button>
            </Card.Body>
        </Card>
    )
}

export default Project;