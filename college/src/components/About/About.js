import React from "react";
import "./About.css";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../assets/images/about-us.jpg";
import Counter from "react-counter";
function About() {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about_img">
                <img src={img} alt="" className="w-100" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="about_content m-4 ">
                <h2>AboutUs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Autem totam nesciunt necessitatibus aspernatur enim officia
                  dolores ad, deserunt hic et quam praesentium magni porro
                  adipisci nisi voluptatibus, nobis placeat aliquam!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;
