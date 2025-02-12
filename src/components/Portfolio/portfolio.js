import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProjectCard from "./portfolioCards";
import PortfolioCard2 from "./portfolioCards2";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import newSectionImage from "../../Assets/Projects/BASE.png"; // Add your image
import tableauImage from "../../Assets/Projects/Tableau3.png";
import tableauImage2 from "../../Assets/Projects/Tableau2.png";

function portfolio() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Computer Science</strong> And <strong className="purple">Analytical </strong> Assignments
        </h1>
        <p style={{ color: "white" }}>
          A portfolio of work done in technical softwares: <u>C/C++</u>, <u>GCP</u>, <u>Tableau</u>, <u>Python</u>, <u>Adobe Illustrator</u> and more!
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Catalogue Search Methods"
              description="Created a search method throughout a catalogue of data that parsed through the data in 3 different methods: Hash Chaining, Hash Open Addressing or Binary Search Tree. This was chosen by the user."
              ghLink="https://github.com/Isaiah7955/Data-Structures-Code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Creating Own Unix Shell"
              description="Created my own Unix Shell to mimic the activity of the shells in our computing systems. Was able to create commands for navigating if user requested built-in command and forking the child process if necessary."
              ghLink="https://github.com/Isaiah7955/Computer-Systems-Code/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Created Multi-Threaded Requester/Resolver Solution"
              description="Created a shared array handling 100+ threads accessing 8 spots, implementing semaphores and mutexes for thread safety."
              ghLink="https://github.com/Isaiah7955/Operating-Systems-Code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Predictive Paging Model"
              description="Developed an algorithm for page allocation in OS using transition matrices and predictive models."
              ghLink="https://github.com/Isaiah7955/Operating-Systems-Code-2/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="R Visual Code Project"
              description="Final project demonstrating data visualization skills in R, generating insightful graphs and analytics."
              ghLink="https://github.com/Isaiah7955/Data-Mining-Code"
            />
          </Col>
        </Row>

        {/* Horizontal Line */}
        <hr style={{ borderTop: "2px solid white", margin: "40px 0" }} />

        {/* New Section */}
        <Row className="new-section" style={{ alignItems: "center", textAlign: "center" }}>
          <Col md={6}>
            <Image src={newSectionImage} fluid rounded />
            
          </Col>
          <Col md={6}>
            <h2 className="purple">BCOR Applied Semester Experience</h2>
            <p style={{ color: "white" }}>
              Worked in a group of 6 analysts for a 16-week course collaborating with companies Justin's Peanut Butter, Noodles & Co, and Spark Mindset. Embarked in multiple 2-3 week long projects in providing holistic business comprehension and computational solutions to diverse problems encountered.
            </p>
              <PortfolioCard2
                moreInfoLink="https://drive.google.com/drive/folders/1pSqrlqJyNy4nXOiqTbXPS-SZY1vzKum4?usp=sharing"              
                />
          </Col>

          <Col md={12} style={{ marginTop: "40px" }}>
            <hr style={{ borderTop: "3px solid purple", marginBottom: "30px" }} />
            <h2 className="purple">Tableau Data Visualization Projects</h2>
            
            <Row className="justify-content-center">
              <Col md={6} className="mb-4">

                  <img src={tableauImage} alt="Tableau Visualization" style={{ width: "100%", height: "auto" }} /> 
                
                <p style={{ color: "white", textAlign: "center" }}>
                  Case study #1 for University depicting major and student retention.
                </p>
              </Col>
              
              <Col md={6} className="mb-4">


                  <img src={tableauImage2} alt="Tableau Visualization" style={{ width: "100%", height: "auto" }} /> 

                <p style={{ color: "white", textAlign: "center" }}>
                  Case study #2 for University analyzing gender and ethnicity retention.
                </p>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default portfolio;