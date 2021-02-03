import React from "react";
import "../contact/style.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/footer";
import Animate from "react-smooth";
import HamburgerMenu from "../../components/hamburger_menu";
import ContactLeft from "../../components/contact_left";
import EmailForm from "../../components/email_form";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet";
import particles from "../../const/contact_particle.js";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Contact extends React.Component {
  componentDidMount() {
    //--Motasim Foads Portfolio website Google analytics--
    //--Replace with your own key !!
    // ReactGa.initialize("UA-154721739-1");
    // ReactGa.pageview('motasimfoad.com - Contact Screen');
  }
  //--Motasim Foads Portfolio website Google analytics--

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Daniel Brown</title>
          <link rel="canonical" href="http://danielbrown.com.br/contact" />
          <meta
            name="description"
            content="Daniel Brown | Home - Fullstack Developer | Project Manager | Tech Enthusiast"
          />
        </Helmet>
        <Animate to="1" from="0" attributeName="opacity">
          <Particles params={particles} className="particle" />
          <Container className="Contact-header" fluid={true}>
            <Row className="Hamburger-menu">
              <HamburgerMenu />{" "}
              <div className="menu-wrapper">
                <div className="hamburger">
                  <Link to="/home">
                    <FontAwesomeIcon color={"white"} icon={faTimes} />
                  </Link>
                </div>
              </div>
            </Row>
            <Row className="Contact-main">
              <Col xl={4} className="Contact-left"></Col>
              <Col xl={4} className="Contact-left">
                <ContactLeft />
              </Col>
              <Col xl={4} className="Contact-left"></Col>
            </Row>
            <Row className="Contact-footer">
              <Footer />
            </Row>
          </Container>
        </Animate>
      </div>
    );
  }
}
export default Contact;
