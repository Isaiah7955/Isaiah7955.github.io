import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./portfolioCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function portfolio() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Computer Science</strong> And  <strong className="purple">Analytical </strong> Assignments
        </h1>
        <p style={{ color: "white" }}>
          A portfolio of work done in technical softwares: <u>C/C++</u>, <u>GCP</u>, <u>Tableau</u>, <u>Python</u>, <u>Adobe Illustrator</u> and more!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={chatify}
              isBlog={false}
              title="Catalogue Search Methods"
              description="Created a search method throughout a catalogue of data that parsed through the data in 3 different methods: Hash Chaining, Hash Open Addressing or Binary Search Tree. This was chosen by the user."
              ghLink="https://github.com/Isaiah7955/Data-Structures-Code"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Creating Own Unix Shell"
              description="Created my own Unix Shell to mimic the activity of the shells in our computing systems. Was able to create commands for navigating if user requested built-in command and forking the child process if necessary. Created differentiating activity between background and foreground activity, as well as creating signal handlers for user (child termination, ctrl-c and ctrl-z."
              ghLink="https://github.com/Isaiah7955/Computer-Systems-Code/tree/main"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Created Multi-Threaded Requester/Resolver Solution"
              description="In this project, I created a shared array that had a maximum amount of space in which a multitude of over 100 threads were trying to access shared data of 8 spots - having to implement necessary sempahores and mutexes in order to lock protected data. Created a properly secured shared array able to pull and push data onto logfile without corruption. Click link for the code!"
              ghLink="https://github.com/Isaiah7955/Operating-Systems-Code"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Predictive Paging Model"
              description="Created an algorithm to operating a control of when pages are paged in and out of our Operating Systems, allocating multiple processes for maximum success. Utilized methods such as transition matrix, popularity matrix and an allocation of predictive next page file allocations."
              ghLink="https://github.com/Isaiah7955/Operating-Systems-Code-2/tree/main"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="R Visual Code Project"
              description="Final project outlaying my data visualization skills using software R - take in provided data file and be able to produce numerous illustrations of R-Visuals."
              ghLink="https://github.com/Isaiah7955/Data-Mining-Code"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default portfolio;
