import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import editor from "../../Assets/Projects/codeEditor.png";
import emotion from "../../Assets/Projects/emotion.png";
import hirehub from "../../Assets/Projects/hirehub.png";
import leaf from "../../Assets/Projects/leaf.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import suicide from "../../Assets/Projects/suicide.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hirehub}
              isBlog={false}
              title="HireHub"
              description="I developed HireHub, a full-stack job platform using Next.js for the frontend, MongoDB for user and job data storage, Supabase for additional storage needs, and Clerk for authentication. The application allows users to post job listings or apply for jobs seamlessly. With its user-friendly interface, real-time data updates, and secure authentication, HireHub streamlines the job search and hiring process."
              ghLink="https://github.com/UdayRajVadeghar/HireHubv1"
              demoLink="https://hire-hubv1.vercel.app"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="React Portfolio"
              description="Portfolio website! Built with ReactJS and Bootstrap CSS, it's a fully responsive showcase of my work and skills, featuring animations for smooth navigation. The site uses React Router for seamless routing, integrates my GitHub contribution graph via GitHub API, and is optimized for search engines. Check it out here."
              ghLink="https://github.com/UdayRajVadeghar/React-Portfolio"
              demoLink="https://udayrajportfolio.vercel.app"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Gesture Flow: Hand Gesture Control System"
              description="Gesture Flow is a hand gesture control system utilizing an STM32 board. It interprets hand movements to control devices. With precise motion detection, it enhances user interaction in applications like smart homes or gaming consoles. This innovative technology revolutionizes user interfaces, offering seamless and intuitive control experiences."
              ghLink="https://google.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Facial Recognition using Single Board"
              description="
              Utilizing the Raspberry Pi, this project trains a facial recognition model using HOG features. By analyzing facial patterns, the system identifies individuals, promising applications in security and access control. Compact and powerful, the Raspberry Pi facilitates portable and efficient solutions for diverse industries, including home automation and retail."
              ghLink="https://github.com/UdayRajVadeghar/Facial-Recognition-using-Raspberry-PI"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Java Open Source Contributor"
              description="As a Java open-source contributor, I actively contribute code, documentation, and bug fixes to Java-based projects. Collaborating with communities, I enhance software quality, scalability, and performance. My contributions empower developers worldwide and foster innovation in the Java ecosystem."
              ghLink="https://github.com/UdayRajVadeghar/Java"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Data Structures Algorithms"
              description="Algorithms is a curated collection of data structures and algorithms implemented in various programming languages. It serves as a comprehensive resource for developers to learn and reference common algorithms like sorting, searching, and graph traversal. This repository aids in understanding fundamental concepts in computer science."
              ghLink="https://github.com/UdayRajVadeghar/Algorithms-for-Placement"
              
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
