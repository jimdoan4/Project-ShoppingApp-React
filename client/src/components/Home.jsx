import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="main-page-image" style={{ height: "26rem" }}>
          <Container className="main-header-img intro-header">
            <h1>EQUIS Men Apparel</h1>
          </Container>
        </Jumbotron>
        <div id="event">
          <div className="container-fluid text-center">
            <div className="container-fluid">
              <Row className="text-center">
                <Col className="main-img-intro">
                  <Card.Img variant="top"
                    src="https://images.lululemon.com/is/image/lululemon/LM3BF7S_038068_1?$image_carousel-lg$"
                  />
                </Col>

                <Col className="main-img-intro">
                  <Card.Img variant="top"
                    src="https://images.lululemon.com/is/image/lululemon/LM3AUTS_037049_1?$image_carousel-lg$"
                  />
                </Col>
              </Row>
            </div>

            <div id="event">
              <button className="btn btn-custom" type="submit" value="Send">
                SHOP WHAT'S NEW
              </button>

              <div className="container-fluid">
                <Row className="text-center">
                  <Col className="secondary-img-intro">
                    <Card.Img variant="top"
                      src="https://images.lululemon.com/is/image/lululemon/LU9A73S_037040_1?$image_carousel-lg_2x$"
                    />
                  </Col>
                  <Col className="secondary-img-intro">
                    <Card.Img variant="top"
                      style={{ width: "20rem", height: "460px" }}
                      src="https://images.lululemon.com/is/image/lululemon/LM9767S_036763_2?$product_tile-lg_2x$"
                    />
                  </Col>
                  <Col className="secondary-img-intro">
                    <Card.Img variant="top"
                      style={{ width: "20rem", height: "460px" }}
                      src="https://images.lululemon.com/is/image/lululemon/LM5609S_1971_1?$image_carousel-lg_2x$"
                    />
                  </Col>
                </Row>
                <br />
                <Row className="text-center">
                  <Col className="secondary-img-intro">
                    <Card.Img variant="top"
                      src="https://images.lululemon.com/is/image/lululemon/LM9474S_037617_2?$product_tile-lg_2x$"
                    />
                  </Col>
                  <Col className="secondary-img-intro">
                    <Card.Img variant="top"
                      src="https://images.lululemon.com/is/image/lululemon/LM9641S_031382_2?$product_tile-lg_2x$"
                    />
                  </Col>
                  <Col className="secondary-img-intro">
                    <Card.Img variant="top"
                      src="https://images.lululemon.com/is/image/lululemon/LU9AF5S_0001_2?$product_tile-lg_2x$"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
