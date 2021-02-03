import React, { Component } from "react";
import "../about/style.css";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Footer from "../../components/footer";
import Animate from "react-smooth";
import ReactGa from "react-ga";
import CV from "../../components/cv";
import HamburgerMenu from "../../components/hamburger_menu";
import particles from "../../const/about_particle.js";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class About extends Component {
  componentDidMount() {
    //--Motasim Foads Portfolio website Google analytics--
    //--Replace with your own key !!
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview("motasimfoad.com - About Screen");
    //--Motasim Foads Portfolio website Google analytics--
  }

  render() {
    return (
      <Container className="About-header" fluid={true}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | Daniel Brown</title>
          <link rel="canonical" href="http://danielbrown.com.br/about" />
          <meta
            name="description"
            content="Daniel Brown | Home - Fullstack Developer | Project Manager | Tech Enthusiast"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Row className="About-main">
            <HamburgerMenu />
            <div className="menu-wrapper">
              <div className="hamburger">
                <Link to="/home">
                  <FontAwesomeIcon color={"white"} icon={faTimes} />
                </Link>
              </div>
            </div>
            <CV />
          </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
        </Animate>
      </Container>
    );
  }
}

export default About;
