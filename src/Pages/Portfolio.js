import React from "react";
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import ProjectCards from "../components/Project";
import projects from "../projects.json";
import CodeQuiz from "../assets/Images/CodeQuiz.png";
import thevillage from "../assets/Images/thevillage.png";
import NUZlogo from "../assets/Images/NUZlogo.png";
import WorkDayScheduler from "../assets/Images/WorkDayScheduler.png";
import "./portfolio.css";

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
      <MDBContainer>
        <div>
          <h3>Portfolio</h3>
          <hr/>
        </div>
        <MDBRow>
          {projects.map((project) => (
            <MDBCol sm={12} md={6} lg={4} id="project">
              <ProjectCards 
                  title={project.title}
                  image={image[project.image] ? image[project.image].src : "tree"}
                  link={project.link}
                  text={project.description}
                  key={project.id} 
                  id="card"
                  />
            </MDBCol>))}
        </MDBRow>
      </MDBContainer>
      

    // <Container id="main">
    //   <div id="projectsdiv">
    //     <div>
    //       <h3>Portfolio</h3>
    //       <hr/>
    //     </div>
    //     <Row id="projectrow">
    //         {projects.map((project) => (
    //       <Col sm={12} md={6} lg={4} id="project">
    //         <Project 
    //             title={project.title}
    //             image={image[project.image] ? image[project.image].src : "tree"}
    //             link={project.link}
    //             key={project.id} 
    //             id="card"
    //             />
    //       </Col>))}
    //     </Row>
    //   </div>
    // </Container>
    )
}

export default Portfolio;