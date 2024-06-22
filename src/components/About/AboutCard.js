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
            
              I/m a Fourth year student at Amrita Vishwa Vidyapeetham, Chennai, I'm eager to explore roles in Software Development.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cubing
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Hardwork pays off"{" "}
          </p>
          {/*<footer className="blockquote-footer">uday</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
