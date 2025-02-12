import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view"
      style={{
        width: "100%", // Ensures it takes full width of parent container
        maxWidth: "1000px", // Adjust for larger size
        margin: "auto", 
        borderRadius: "15px", // Softer edges
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" // Subtle shadow
      }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" 
          style={{ 
            height: "240px" // Adjust height for larger image
        //    width: "280px",
        // //   objectFit: "cover", // Ensures image fills the space properly
        //    borderTopLeftRadius: "15",
        //    borderTopRightRadius: "15px"
          }} 
      />
      <Card.Body>
        <Card.Title><strong>{props.title}</strong></Card.Title>
        <hr style={{ borderTop: "3px solid white", margin: "10px 0", opacity: 1}} />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button> */}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Click for more info"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;