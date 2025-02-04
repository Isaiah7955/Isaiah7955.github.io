import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hi everyone, my name is  <span className="purple">Isaiah Hernandez-Gold </span> 
           and I am an <strong>Austin, Texas</strong> native and a current <strong>CU Boulder student.</strong> 
           <br></br>
           <p></p>
           I am currently majoring in <strong>Information Management</strong>, with minors in 
           <strong> Computer Science</strong> and <strong>Creative Technology Design</strong>. 
           <br></br>
           <p></p>
           I am extremely passionate about data analytics, visualization, and modification. I am currently focusing on technical 
           analyst roles, specifically those in the apparel or consulting sectors. 
           <br></br>
           <p></p>
           Aspiring to launch my own clothing and outdoor brand, <i>Faneti[k],</i> with expertise in Adobe design and production.
           <br></br>
           <p></p>
           Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
