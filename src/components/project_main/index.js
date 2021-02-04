import React, { Component } from "react";
import "../project_main/style.css";
import { Col, Card, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faLink } from "@fortawesome/free-solid-svg-icons";
import info from "../../const/project_info";
import Lightbox from "react-image-lightbox";

console.log(info.data);

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
            <Col xl={6} key={item.id} className="card_col">
              <a href={item.link} target="_blank">
                <Card
                  className="card_main"
                  style={{
                    minHeight: 550,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    padding: 20,
                  }}
                >
                  <br />
                  <h2 style={{ fontWeight: 900, fontSize: 26 }}>{item.name}</h2>
                  <footer
                    style={{ alignItems: "center", fontSize: 15 }}
                    className="blockquote-footer"
                  >
                    built using{" "}
                    <strong
                      title="Source Title"
                      style={{ alignItems: "center" }}
                    >
                      {item.tools}
                    </strong>
                  </footer>
                  <br />
                  <Image
                    src={item.image[0]}
                    style={{ maxWidth: 600, maxHeight: 320 }}
                  />
                  <br />
                  <Card.Body>
                    &nbsp;&nbsp;
                    {item.link !== false && (
                      <Card.Link href={item.link} target="_blank">
                        <FontAwesomeIcon
                          className="icon"
                          size="lg"
                          icon={faLink}
                        />
                      </Card.Link>
                    )}
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </>
        ))}
      </Row>
    );
  }
}
