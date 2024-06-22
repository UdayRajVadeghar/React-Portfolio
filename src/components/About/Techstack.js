import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact
} from "react-icons/di";
import {
  SiAmazonapigateway, SiAmazonaws, SiAmazonec2, SiAmazons3, SiAwsamplify, SiAwslambda,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql, SiRedux, SiSupabase
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonapigateway />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazons3 />
      </Col>  
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase />
      </Col>
      
    </Row>
  );
}

export default Techstack;
