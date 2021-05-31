import React, { Component } from "react";
import "../project_main/style.css";
import { Col, Card, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faLink } from "@fortawesome/free-solid-svg-icons";
import info from "../../const/skills_info";
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";

export default class PM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      image: "",
    };
  }

  render() {
    const { photoIndex, isOpen, image } = this.state;

    return (
      <Row xl={12} className="main_row">
        {info.data.map((item) => (
          <>
            {isOpen && <Card />}
            <Col xl={4} key={item.id} className="card_col">
              <Card
                className="card_main"
                style={{
                  minHeight: 350,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  padding: 20,
                }}
              >
                <br />
                <Image
                  src={item.image[0]}
                  style={{
                    maxWidth: 300,
                    maxHeight: 250,
                    backgroundSize: "contain",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 900,
                    fontSize: 30,
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </h2>
                <strong
                  title="Source Title"
                  style={{ textAlign: "center", fontSize: 16 }}
                >
                  {item.tools}
                </strong>
                <br />
              </Card>
            </Col>
          </>
        ))}
      </Row>
    );
  }
}
