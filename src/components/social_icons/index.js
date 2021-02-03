import React from "react";
import "../social_icons/style.css";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faBehance,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function SocialIcons() {
  return (
    <Col xl={12} className="social-icons">
      <a
        href="mailto:me@danielbrown.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faEnvelope} />
      </a>

      <a
        href="https://www.behance.net/odanielbrown"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faBehance} />
      </a>

      <a
        href="https://github.com/danielbrown4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faGithub} />
      </a>
      <a
        href="https://codepen.io/dabf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="git" icon={faCodepen} />
      </a>
      <br />
      <a
        href="https://api.whatsapp.com/send?phone=553888146598"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="whatsapp" icon={faWhatsapp} />
      </a>
      <a
        href="https://twitter.com/odanielbrown"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="twitter" icon={faTwitter} />
      </a>
      <a
        href="https://www.instagram.com/odanielbrown/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="insta" icon={faInstagram} />
      </a>
      <a
        href="https://linkedin.com/in/odanielbrown/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
      </a>
      <a></a>
    </Col>
  );
}

export default SocialIcons;
