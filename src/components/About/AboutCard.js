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
           Apart from school, some other things I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Everything outdoors! 
              <ul>
                <li>Skiing</li>
                <li>Hiking</li>
                <li>Camping</li>
                <li>Surfing</li>
                <li>Climbing</li>
                <li>And so much more!</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight />  Cooking and nutrition - I love creating my own recipes!
            </li>
            <li className="about-activity">
              <ImPointRight /> Daily Crosswords and Sudokus!
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
