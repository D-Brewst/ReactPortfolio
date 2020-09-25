import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CodeQuiz from "../assets/Images/CodeQuiz.png";
import thevillage from "../assets/Images/thevillage.png";
import NUZlogo from "../assets/Images/NUZlogo.png";
import WorkDayScheduler from "../assets/Images/WorkDayScheduler.png";

function Portfolio(){
    const image = {
      CodeQuiz: {
        src: CodeQuiz
      },
      thevillage: {
        src: thevillage
      },
      NUZlogo: {
        src: NUZlogo
      },
      WorkDayScheduler: {
        src: WorkDayScheduler
      },
      PasswordGenerator: {
        src: "http://www.innovins.com/wp-content/uploads/2017/03/Strong-Password.jpg"
      },
      WeatherDashboard: {
        src: "https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg"
      }
    }

    return (
    <Container>
        <Row>
            {projects.map((project) => (
          <Col md={4}>
            <Project 
                title={project.title}
                image={image[project.image] ? image[project.image].src : "tree"}
                link={project.link}
                key={project.id} />
          </Col>))}
        </Row>
    </Container>
    )
}

export default Portfolio;