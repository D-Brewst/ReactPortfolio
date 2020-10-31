import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Skills from "../components/Skills.js";
import hardwork from "../assets/Images/hardwork.png";
import heart from "../assets/Images/heart.png";
import problemsolving from "../assets/Images/problemsolving.png";
import teamwork from "../assets/Images/teamwork.png";
import "./about.css";

function About(){
    return (
        <div>
            <h1 id="aboutme">About Me</h1>
            <MDBContainer className="mt-5" id="attribute-section">
                <MDBRow>
                    <MDBCol className="attribute-box" md={6} lg={3}>
                        <img className="attributes" src={hardwork} alt="hard work" />
                        <h2 className="qualities">Hard Worker</h2>
                    </MDBCol>
                    <MDBCol className="attribute-box" md={6} lg={3}>
                        <img className="attributes" src={problemsolving} alt="problem solving" />
                        <h2 className="qualities">Problem Solver</h2>
                    </MDBCol>
                    <MDBCol className="attribute-box" md={6} lg={3}>
                        <img className="attributes" src={heart} alt="passionate" />
                        <h2 className="qualities">Passionate</h2>
                    </MDBCol>
                    <MDBCol className="attribute-box" md={6} lg={3}>
                        <img className="attributes" src={teamwork} alt="team work" />
                        <h2 className="qualities">Team Player</h2>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow>
                    <MDBCol id="self-description">
                        <p>I am a passionate programmer with a tremendous amount of grit. I have built applications with several frameworks including HTML, CSS, JavaScript, jQuery, React, Node.js, Express.js, mySQL, Sequelize, and MongoDB. I also have experience with algorithm scripting, writing tests, implementing lazy loading, creating Progressive Web Applications, and file compression. I am a quick learner and I study daily to increase my proficiency and knowledge.</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <Skills />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default About