import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About(){
    return (
        <Container id="aboutMe">
            <Row>
                <Col>
                    <h3>About Me</h3>
                    <hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                <img class="img-fluid float-left" src="https://40.media.tumblr.com/31e92ae1d5f1df745f3a6d2b236dc7cd/tumblr_mtp298Siwl1rgam01o1_1280.png" id="pic" alt="Devon Brewster" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa quam accusamus ratione veniam quis similique dolorum, nobis optio quaerat atque eligendi ducimus! At, laborum accusamus earum in ratione nulla fugiat? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo dolor expedita omnis vel. Quae non enim nostrum ipsam autem iusto expedita debitis, quas, omnis dolore quibusdam assumenda. Ducimus, eveniet. Minus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, inventore numquam optio libero architecto repellat cumque iste esse quas, adipisci delectus quis saepe, illum laboriosam reiciendis asperiores ullam quaerat officiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, suscipit ipsam. Rerum, modi consequuntur. Totam laudantium aspernatur eos voluptate itaque, dolores officiis error numquam earum nisi saepe cupiditate rem quaerat? 
                    <br />
                    <br />
                    Checkout my resume: <a href="/">Resume</a>.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;