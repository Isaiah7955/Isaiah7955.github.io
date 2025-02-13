import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import adidas1 from "../../Assets/Projects/adidas1.png";
import adidas2 from "../../Assets/Projects/adidas2.png";
import adidas3 from "../../Assets/Projects/adidas3.png";
import SendToWin from "../../Assets/Projects/SendToWin.png";
import FriscoPandas from "../../Assets/Projects/FriscoPandas.jpg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Carousel from "react-bootstrap/Carousel";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Previous Project <strong className="purple">Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={[adidas1]}
              isBlog={false}
              title="Adidas Lead Time Deviation Project"
              description="Helped conduct a root cause analysis and modeling of current lead time statistics for all warehouses in the United States for Adidas. Reduced the lead time deviation and accuracy of current SAP model and decreased the lead time deviation by 15 days on average for all orders, with projected $480k in annual savings for Inbound Team."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://drive.google.com/drive/folders/17R1_F76AyJb1HhpZiIBaqPgb5tyFSvs7?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adidas3}
              isBlog={false}
              title="Adidas Inbound KPI Dashboard"
              description="Created a KPI dashboard via Microsoft PowerBi, compiling data sources and metrics for all team members into a central location. Linked with real-time data from Data Lakehouse, reports from SAP and direct Excel files from warehouses. Used SQL and Python to derive exact metrics and measurements analysts needed, allowing real-time data refresh from all sources on a central location."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://drive.google.com/drive/folders/1DPvahoaCiruaBAz6046A2-JFfoJc8Ya1?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SendToWin}
              isBlog={false}
              title="SendToWin Professional Engagement"
              description="Managed a team of 4 analysts in a professional consulting engagement for email marketing company SendToWin. Helped allocate profitability metrics, dynamic pricing models and marketing plan to help project revenue increase 10x in 3 years. Developed comprehensive slide deck deliverables, including mid-project updates and final presentations, ensuring clear communication of insights and key findings to stakeholders."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://drive.google.com/drive/folders/1PFynoEBtTtWAVhfcrMp4XOd_LO0hvemj?usp=sharing"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FriscoPandas}
              isBlog={false}
              title="Frisco Pandas Website and Ecommerce Store Creation"
              description="Helped a professional sports team create their first online website, demonstrating a knowledge of increased social awareness, as well as created first Ecommerce and Merchandise store for team. Created revenue models to forecast income from sales, as well as researched and connected with 3rd-party printing/design company."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://drive.google.com/drive/folders/1pTXvOBPXOUwbm5Swnx9QvYmntVsWAbaC?usp=sharing"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Frisco Pandas Website and Ecommerce Store Creation"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
