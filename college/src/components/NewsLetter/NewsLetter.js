import React from "react";
import "./NewsLetter.css";
import { Container, Row, Col } from "react-bootstrap";
function NewsLetter() {
  return (
    <>
      <section className="sub">
        <Container className="letter mb-3">
          <Row>
            <Col lg="12" className="col text-center mb-3 px-4 w-80">
              <h2 className="mt-4">Subscribe Our NewsLetter</h2>
              <div className="subscribe mt-4 ">
                <input type="text" placeholder="Email" />
                <button className="btn sub">Subscribe</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NewsLetter;
