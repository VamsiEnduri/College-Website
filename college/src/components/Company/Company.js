import React from "react";
import "./Company.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineGoogle,
  AiOutlineFacebook,
  AiOutlineAmazon,
  AiOutlineApple,
  AiOutlineAlibaba,
} from "react-icons/ai";
function Company() {
  return (
    <>
      <section className="section">
        <Container>
          <Row>
            <Col lg="2" md="3">
              <h2 className="d-flex align-items-center gap-1">
                <AiOutlineApple />
                Apple
              </h2>
            </Col>
            <Col lg="2" md="3">
              <h2 className="d-flex align-items-center gap-1">
                <AiOutlineGoogle />
                Google
              </h2>
            </Col>
            <Col lg="2" md="3">
              <h2 className="d-flex align-items-center gap-1">
                <AiOutlineApple />
                Apple
              </h2>
            </Col>
            <Col lg="2" md="3">
              <h2 className="d-flex align-items-center gap-1">
                <AiOutlineFacebook />
                Facebook
              </h2>
            </Col>
            <Col lg="2" md="3">
              <h2 className="d-flex align-items-center gap-1 ">
                <AiOutlineAmazon />
                Amazon
              </h2>
            </Col>
            <Col lg="2" md="3">
              <h2>
                <AiOutlineAlibaba />
                Alibaba
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Company;
