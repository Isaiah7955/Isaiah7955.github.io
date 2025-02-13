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

// New Adobe content images
import adobeImage1 from "../../Assets/Projects/adobeImage1.png";
import adobeImage2 from "../../Assets/Projects/adobeImage2.png";
import adobeImage3 from "../../Assets/Projects/adobeImage3.png";
import adobeImage4 from "../../Assets/Projects/adobeImage4.png";
import adobeImage5 from "../../Assets/Projects/adobeImage5.png";
import adobeImage6 from "../../Assets/Projects/adobeImage6.png";
import adobeImage7 from "../../Assets/Projects/adobeImage7.png";
import adobeImage8 from "../../Assets/Projects/adobeImage8.png";

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
              description="Created a shared array handling 1000+ threads simultaneously accessing 8 shared data spots, implementing semaphores, mutexes and other synchornization methods for thread safety."
              ghLink="https://github.com/Isaiah7955/Operating-Systems-Code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Predictive Paging Model"
              description="Developed an algorithm for page allocation in OS using transition matrices and predictive models generated through intense trial and error."
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
            <h1 className="project-heading">
              <strong className="purple">BCOR </strong> Applied Semester <strong className="purple"> </strong> Experience
            </h1>
            <p style={{ color: "white" }}>
              Worked in a group of 6 analysts for a 16-week course collaborating with companies <u>Justin's Peanut Butter</u>, <u>Noodles & Co</u>, and <u>Spark Mindset</u>. Embarked in multiple 2-3 week long projects in providing holistic business comprehension and computational solutions to diverse problems encountered.
            </p>
              <PortfolioCard2
                demoLink="https://drive.google.com/drive/folders/1pSqrlqJyNy4nXOiqTbXPS-SZY1vzKum4?usp=sharing"              
              />
          </Col>

          <Col md={12} style={{ marginTop: "40px" }}>
            <hr style={{ borderTop: "3px solid purple", marginBottom: "30px" }} />
            <h1 className="project-heading">
              <strong className="purple">Tableau </strong> Data Visualization <strong className="purple">Projects </strong> 
            </h1>
            
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

        {/* New Adobe Content Section */}
        <hr style={{ borderTop: "2px solid white", margin: "40px 0" }} />
        <Row className="justify-content-center">
          <Col md={12} className="text-center">
          <h1 className="project-heading">
              <strong className="purple">Fanetik: </strong> A Conservation In Progress <strong className="purple"> </strong> 
            </h1>
            <p style={{ color: "white" }}>
              A collection of my work using Adobe products, showcasing my skills and hobbies in graphic design!
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col md={3} className="mb-4">
            <Image src={adobeImage1} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>Fanetik Mood Board</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image src={adobeImage2} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>Fanetik Logo Design</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image src={adobeImage3} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>"Dream With Ease"</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image src={adobeImage4} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>Fanetik Official Logo</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image src={adobeImage5} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>Fanetik Mock Article</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image src={adobeImage6} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>Aeon // Fanetik</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image src={adobeImage7} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>Fanetik Logo PT2</p>
          </Col>
          <Col md={3} className="mb-4">
            <Image src={adobeImage8} fluid rounded />
            <p style={{ color: "white", textAlign: "center" }}>Fanetik Spider Shirt Design</p>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default portfolio;