import React from "react";
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import ProjectCards from "../components/Project";
import projects from "../projects.json";
import CodeQuiz from "../assets/Images/CodeQuiz.png";
import thevillage from "../assets/Images/thevillage.png";
import NUZlogo from "../assets/Images/NUZlogo.png";
import WorkDayScheduler from "../assets/Images/WorkDayScheduler.png";
import WyldCard from "../assets/Images/WyldCard.png";
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
      WyldCard: {
        src: WyldCard
      },
      WeatherDashboard: {
        src: "https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg"
      }
    }

    return (
      <div id="folio">
            <h1 className="heading text-center">My Projects</h1>
        <MDBContainer id="main">
          <MDBRow>
            {projects.map((project) => (
              <MDBCol className="px-1 my-1" sm={12} md={6} lg={4}>
                <ProjectCards 
                    title={project.title}
                    image={image[project.image] ? image[project.image].src : "tree"}
                    link={project.link}
                    text={project.description}
                    key={project.id} 
                    type={project.type}
                    id="card"
                    />
              </MDBCol>))}
              <p id="projectPtag">Check out my <a id="GHlink" href="https://github.com/D-Brewst">Github profile</a> to see more! </p>
          </MDBRow>
        </MDBContainer>
      </div>
      

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