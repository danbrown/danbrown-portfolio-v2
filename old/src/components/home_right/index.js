import React from "react";
import "../home_right/style.css";
import Dabf from "../../assets/img/fishy.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          <br />
          <br />
        </Col>
        <Row className="home-right-footer">
          <Image
            src={Dabf}
            className="home-right-main-img"
            alt="Databox Logo"
          />
          <SocialIcons />
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
