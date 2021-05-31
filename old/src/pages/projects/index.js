import React, { Component } from "react";
import "../projects/style.css";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";
import { Helmet } from "react-helmet";
import HamburgerMenu from "../../components/hamburger_menu";
import particles from "../../const/project_particle.js";
import Particles from "react-particles-js";
import ProjectBody from "../../components/project_main";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Projects extends Component {
  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Project | Daniel Brown</title>
          <link rel="canonical" href="http://danielbrown.com.br/project" />
          <meta
            name="description"
            content="Daniel Brown | Home - Fullstack Developer | Project Manager | Tech Enthusiast"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Row className="About-main">
            <Particles params={particles} className="particle" />
            <HamburgerMenu />{" "}
            <div className="menu-wrapper">
              <div className="hamburger">
                <Link to="/about">
                  <FontAwesomeIcon color={"white"} icon={faTimes} />
                </Link>
              </div>
            </div>
            <ProjectBody />
          </Row>
          <br />
          <Row className="About-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default Projects;
