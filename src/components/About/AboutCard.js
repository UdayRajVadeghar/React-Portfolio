import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Uday Raj Vadeghar </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br></br>
            <br />
            As a student, I am actively seeking opportunities in the field of Computer Science.
            <br></br>
            <br />
            
              In the midst of my third year at Amrita Vishwa Vidyapeetham, Chennai, I'm eager to explore roles in Software Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Vlogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring the Web
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You only need to be better than your yesterday self"{" "}
          </p>
          <footer className="blockquote-footer">Uday</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
