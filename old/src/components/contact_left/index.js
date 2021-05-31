import React from "react";
import "../contact_left/style.css";
import { Row, Col } from "react-bootstrap";
import SocialIcons from "../social_icons";

function Contact_Left() {
  return (
    <div>
      <Row className="Contact-text">
        <Col xl={12}>
          <h1 className="p-heading1">Get In Touch</h1>
          <p className="p-heading2">
            Hello <strong>Visitor!</strong>
            <br />
            Thank you for be interested! If you have any project idea, feel free
            to share to me. I am always open for discussion. You can contact me
            via Email (preference)&nbsp;
            <strong>OR</strong> simply click on the social media icon if you are
            more comfortable there.
          </p>
        </Col>
      </Row>

      <Row className="contact-left-footer">
        <SocialIcons />
      </Row>
    </div>
  );
}

export default Contact_Left;
