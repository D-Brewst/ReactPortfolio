import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import frameworks from "../assets/Images/frameworks.PNG";
import "./about.css";

function About(){
    return (
        <div>
                <h1 id="aboutme">About Me</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <p>I am a full stack developer that has built applications with several frameworks including HTML, CSS, JavaScript, jQuery, React, Node.js, Express.js, mySQL, Sequelize, and MongoDB. I also have experience with writing tests, implementing lazy loading, creating Progressive Web Applications, and file compression. I am a quick learner and I study daily to increase my proficiency and knowledge.</p>
                    </MDBCol>
                    <MDBCol>
                        <img id="frameworks" src={frameworks} alt="frameworks"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default About